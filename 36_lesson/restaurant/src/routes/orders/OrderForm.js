import { Button, Form, Select, Space, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectCommonOptions, selectOrderEdit } from "../../selectors";
import { getServerOneOrder, saveOrder } from "../../store/actions/orderAction";
import { useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";

export default function OrderForm() {
  const editOrder = useSelector(selectOrderEdit)
  const initOptions = useSelector(selectCommonOptions)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let { idOrder } = useParams()

  useEffect(() => {
    if (idOrder) {
      dispatch(getServerOneOrder(idOrder))
    }
  }, [dispatch, idOrder])
  
  function setDishArr(idDishArr) {
    return idDishArr.map((dish) => {
      return {
        dishId: dish
      }
    })
  }

  if (idOrder && !editOrder?.id) {
    return (
      <div>
        <Typography.Title strong>Loading edit order...</Typography.Title>
        <Typography.Title strong><LoadingOutlined /></Typography.Title>
      </div>
    )
  }

  function onFinish(value) {
    const orderData = { ...editOrder, ...value, 'dishes': setDishArr(value.dishes) }

    dispatch(saveOrder(orderData))

    navigate('/')
  }

  return (
    <Space wrap>
      <Form
        initialValues={editOrder}
        onFinish={onFinish}
        autoComplete="off"
        layout='horizontal'
        className='form'
      >
        <Form.Item
          name="waiterId"
        >
          <Select
            className='select'
            placeholder="Select waiter"
            options={initOptions.waiter}
          />
        </Form.Item>

        <Form.Item
          name="tableId"
        >
          <Select
            className='select'
            placeholder="Select table"
            options={initOptions.table}
          />
        </Form.Item>

        <Form.Item
          name="dishes"
        >
          <Select
            className='select'
            mode="multiple"
            placeholder="Select dish"
            options={initOptions.dish}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Space>
  )
}