import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectDishEdit } from "../../selectors";
import { getServerOneDish, saveDish } from "../../store/actions/dishAction";
import { Button, Form, Input } from "antd";
import { DollarOutlined, FormOutlined } from "@ant-design/icons";
import { rulesForm } from "../../extra/rulesForm";
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
          rules={rulesForm.dishName}
        >
          <Input prefix={<FormOutlined />} placeholder="Enter dish name" className='input' />
        </Form.Item>

        <Form.Item
          name="description"
          rules={[rulesForm.dishDiscription]}
        >
          <Input prefix={<FormOutlined />} placeholder="Enter dish description" className='input' />
        </Form.Item>

        <Form.Item
          name="price"
          rules={[rulesForm.dishPrice]}
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