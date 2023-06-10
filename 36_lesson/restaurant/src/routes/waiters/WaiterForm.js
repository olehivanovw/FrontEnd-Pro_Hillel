import { useDispatch, useSelector } from "react-redux";
import { selectWaiterEdit } from "../../selectors";
import { useNavigate, useParams } from "react-router-dom";
import { getServerOneWaiter, saveWaiter } from "../../store/actions/waiterAction";
import { Button, Form, Input, Typography } from "antd";
import { LoadingOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { useEffect } from "react";

export default function WaiterForm() {
  const TEMPLATE_PHONE = /^\d{3}-\d{2}-\d{2}$/
  const waiterEdit = useSelector(selectWaiterEdit)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let { idWaiter } = useParams()

  useEffect(() => {
    if (idWaiter) {
      dispatch(getServerOneWaiter(idWaiter))
    }
  }, [dispatch, idWaiter])

  if (idWaiter && !waiterEdit?.id) {
    return (
      <div>
        <Typography.Title strong>Loading edit waiter...</Typography.Title>
        <Typography.Title strong><LoadingOutlined /></Typography.Title>
      </div>
    )
  }

  function onFinish(value) {
    const waiterDate = { ...waiterEdit, ...value }

    dispatch(saveWaiter(waiterDate))

    navigate('/waiters')
  }

  return (
    <Form
      initialValues={waiterEdit}
      onFinish={onFinish}
      autoComplete="off"
      layout='inline'
      className='form'
    >
      <Form.Item
        name="firstName"
        rules={[
          {
            min: 2,
            message: 'Name must be >= 2 symbols',
          },
          {
            max: 20,
            message: 'Name must be <= 20 symbols',
          },
          {
            required: true,
            message: 'Please input waiter name!',
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Enter waiter name" />
      </Form.Item>

      <Form.Item
        name="phone"
        rules={[
          {
            pattern: TEMPLATE_PHONE,
            message: 'Please input phone be template xxx-xx-xx!',
          },
          {
            required: true,
            message: 'Please input waiter phone!',
          },
        ]}
      >
        <Input prefix={<PhoneOutlined />} placeholder="Enter waiter phone" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}