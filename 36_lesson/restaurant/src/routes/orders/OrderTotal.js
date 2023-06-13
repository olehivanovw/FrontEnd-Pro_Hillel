import {useDispatch, useSelector} from "react-redux";
import {selectDishList, selectOrderEdit} from "../../selectors";
import {Link, useParams} from "react-router-dom";
import {getServerOneOrder} from "../../store/actions/orderAction";
import {useEffect} from "react";
import {Button, Result, Space, Typography} from "antd";
import {LoadingOutlined} from "@ant-design/icons";

export default function OrderTotal() {
  const listInitDish = useSelector(selectDishList)
  const editOrder = useSelector(selectOrderEdit)
  const dispatch = useDispatch()
  let { idOrder } = useParams()

  useEffect(() => {
    if (idOrder) {
      dispatch(getServerOneOrder(idOrder))
    }
  }, [dispatch, idOrder])

  const dishList = listInitDish.reduce((acc, currDish) => {
    acc[currDish.id] = currDish

    return acc
  }, {})

  if (idOrder && !editOrder?.id) {
    return (
      <div>
        <Typography.Title strong>Loading sum...</Typography.Title>
        <Typography.Title strong><LoadingOutlined /></Typography.Title>
      </div>
    )
  }

  const dishPrice = editOrder.dishes.map(dish => dishList[dish.dishId].price)
  const dishCount = editOrder.dishes.map(dish => dish.count)

  const result = dishCount.map(function (value, index) {
    return value * dishPrice[index]
  })

  const totalSum = result.reduce((acc, curr) => acc + curr)

  return (
    <div>
      <Result
        status="success"
        title={<Typography.Title>{totalSum} $</Typography.Title>}
        subTitle='The total amount of the check: the waiters tip is included in the total bill!'
      />
      <div>
        <Space>
          <Button>
            <Link to='/'>Back to Orders</Link>
          </Button>
          <Button danger >Delete Order</Button>
        </Space>
      </div>
    </div>
  )
}