import { useDispatch, useSelector } from "react-redux";
import { getServerOneContact, saveContact } from "../../store/actions/contactAction";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { selectContactEdit } from "../../selectors/selectContacts";
import { Button, Form, Input, Typography } from "antd";
import { LoadingOutlined, MobileOutlined, UserOutlined } from "@ant-design/icons";

export default function ContactForm () {
  const TEMPLATE_PHONE = /^\d{3}-\d{3}-\d{2}-\d{2}$/
  const { Item } = Form
  const { Title } = Typography;
  const contactEdit = useSelector(selectContactEdit)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let { idContact } = useParams()

  useEffect(() => {
    if (idContact) {
      dispatch(getServerOneContact(idContact))
    }
  }, [dispatch, idContact])

  function onFinish(value) {
    const contactDate = { ...contactEdit, ...value }

    dispatch(saveContact(contactDate))

    navigate('/contact')
  }

  if (idContact && !contactEdit?.id) {
    return (
      <div>
        <Title strong>Loading...</Title>
        <Title strong><LoadingOutlined /></Title>
      </div>
    )
  }

  return (
    <Form
      initialValues={contactEdit}
      onFinish={onFinish}
      autoComplete="on"
      layout='inline'
      className='form'
    >
      <Item
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
            message: 'Please input your name!',
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Enter your name" />
      </Item>

      <Item
        name="surname"
        rules={[
          {
            min: 2,
            message: 'Surname must be >= 2 symbols',
          },
          {
            max: 20,
            message: 'Surname must be <= 20 symbols',
          },
          {
            required: true,
            message: 'Please input your surname!',
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Enter your surname" />
      </Item>

      <Item
        name="phone"
        rules={[
          {
            pattern: TEMPLATE_PHONE,
            message: 'Phone must be template xxx-xxx-xx-xx',
          },
          {
            required: true,
            message: 'Please input your phone!',
          },
        ]}
      >
        <Input prefix={<MobileOutlined />} placeholder="Enter your phone!" />
      </Item>

      <Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Item>
    </Form>
  )
}