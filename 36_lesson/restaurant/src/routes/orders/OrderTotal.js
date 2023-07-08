import { useDispatch, useSelector } from "react-redux";
import { selectDishList, selectOrderEdit } from "../../selectors";
import { Link, useParams } from "react-router-dom";
import { getServerOneOrder, removeOrder } from "../../store/actions/orderAction";
import { useEffect } from "react";
import { Button, Result, Space, Spin, Typography } from "antd";

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

  if (idOrder && !editOrder?.id) {
    return (
      <Space direction="vertical" className='spin'>
        <Spin tip="Loading" size="large">
          <div className="content" />
        </Spin>
      </Space>
    )
  }

  function bill(dish, order) {
    const dishList = dish.reduce((acc, currDish) => {
      acc[currDish.id] = currDish

      return acc
    }, {})

    const dishPrice = order.dishes.map(dish => dishList[dish.dishId].price)
    const dishCount = order.dishes.map(dish => dish.count)

    const result = dishCount.map(function (value, index) {
      return value * dishPrice[index]
    })

    return result.reduce((acc, curr) => acc + curr)
  }

  function onDeleteBtnClick(order) {
    dispatch(removeOrder(order))
  }

  return (
    <div>
      <Result
        status="success"
        title={<Typography.Title>{bill(listInitDish, editOrder)} $</Typography.Title>}
        subTitle='The total amount of the check: the waiters tip is included in the total bill!'
      />
      <div>
        <Space>
          <Button type="primary">
            <Link to='/'>Back to Orders</Link>
          </Button>
          <Button type="primary" danger onClick={() => onDeleteBtnClick(editOrder)}>
            <Link to='/'>Delete</Link>
          </Button>
        </Space>
      </div>
    </div>
  )
}