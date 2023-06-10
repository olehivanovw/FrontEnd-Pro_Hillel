import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectDishEdit } from "../../selectors";
import { useEffect } from "react";
import { getServerOneDish, saveDish } from "../../store/actions/dishAction";
import { Button, Form, Input, Typography } from "antd";
import { DollarOutlined, FormOutlined, LoadingOutlined } from "@ant-design/icons";

export default function DishForm() {
  const dishEdit = useSelector(selectDishEdit)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let { idDish } = useParams()

  useEffect(() => {
    if (idDish) {
      dispatch(getServerOneDish(idDish))
    }
  }, [dispatch, idDish])

  if (idDish && !dishEdit?.id) {
    return (
      <div>
        <Typography.Title strong>Loading edit dish...</Typography.Title>
        <Typography.Title strong><LoadingOutlined /></Typography.Title>
      </div>
    )
  }

  function onFinish(value) {
    const dishDate = { ...dishEdit, ...value }

    dispatch(saveDish(dishDate))

    navigate('/dishes')
  }

  return (
    <Form
      initialValues={dishEdit}
      onFinish={onFinish}
      autoComplete="off"
      layout='inline'
      className='form'
    >
      <Form.Item
        name="name"
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
            message: 'Please input dish name!',
          },
        ]}
      >
        <Input prefix={<FormOutlined />} placeholder="Enter dish name" />
      </Form.Item>

      <Form.Item
        name="description"
        rules={[
          {
            required: true,
            message: 'Please input dish description!',
          },
        ]}
      >
        <Input className='input' prefix={<FormOutlined />} placeholder="Enter dish description" />
      </Form.Item>

      <Form.Item
        name="price"
        rules={[
          {
            required: true,
            message: 'Please input dish price!',
          },
        ]}
      >
        <Input prefix={<DollarOutlined />} placeholder="Enter dish price" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}