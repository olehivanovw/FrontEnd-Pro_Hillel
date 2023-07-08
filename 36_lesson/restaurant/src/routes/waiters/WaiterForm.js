import { useDispatch, useSelector } from "react-redux";
import { selectWaiterEdit } from "../../selectors";
import { useNavigate, useParams } from "react-router-dom";
import { getServerOneWaiter, saveWaiter } from "../../store/actions/waiterAction";
import { Button, Form, Input } from "antd";
import { PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { rulesForm } from "../../extra/rulesForm";
import FormWrapper from "../../extra/FormWrapper";

export default function WaiterForm() {
  const waiterEdit = useSelector(selectWaiterEdit)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let { idWaiter } = useParams()

  function onFinish(value) {
    const waiterDate = { ...waiterEdit, ...value }

    dispatch(saveWaiter(waiterDate))

    navigate('/waiters')
  }

  return (
    <FormWrapper id={idWaiter} editId={waiterEdit?.id} oneFetch={getServerOneWaiter}>
      <Form
        initialValues={waiterEdit}
        onFinish={onFinish}
        autoComplete="off"
        layout='horizontal'
        className='form'
      >
        <Form.Item
          name="firstName"
          rules={rulesForm.waiterFirstName}
        >
          <Input prefix={<UserOutlined />} placeholder="Enter waiter name" className='input' />
        </Form.Item>

        <Form.Item
          name="phone"
          rules={rulesForm.waiterPhone}
        >
          <Input prefix={<PhoneOutlined />} placeholder="Enter waiter phone" className='input' />
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