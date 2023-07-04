import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectDishEdit } from "../../selectors";
import { getServerOneDish, saveDish } from "../../store/actions/dishAction";
import { Button, Form, Input } from "antd";
import { DollarOutlined, FormOutlined } from "@ant-design/icons";
import FormWrapper from "../../extra/FormWrapper";

export default function DishForm() {
  const dishEdit = useSelector(selectDishEdit)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let { idDish } = useParams()

  function onFinish(value) {
    const dishDate = { ...dishEdit, ...value }

    dispatch(saveDish(dishDate))

    navigate('/dishes')
  }

  return (
    <FormWrapper id={idDish} editId={dishEdit?.id} oneFetch={getServerOneDish}>
      <Form
        initialValues={dishEdit}
        onFinish={onFinish}
        autoComplete="off"
        layout='horizontal'
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
          <Input prefix={<FormOutlined />} placeholder="Enter dish name" className='input' />
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
          <Input prefix={<FormOutlined />} placeholder="Enter dish description" className='input' />
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
          <Input prefix={<DollarOutlined />} placeholder="Enter dish price" type='number' className='input' />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </FormWrapper>
  )
}