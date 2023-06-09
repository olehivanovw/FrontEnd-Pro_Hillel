import { Button, Form, Input, Typography } from "antd";
import { FormOutlined, LoadingOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {selectTableEdit } from "../../selectors";
import { useNavigate, useParams } from "react-router-dom";
import { getServerOneTable, saveTable } from "../../store/actions/tableAction";
import { useEffect } from "react";

export default function TableForm () {
  const tableEdit = useSelector(selectTableEdit)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let { idTable } = useParams()

  useEffect(() => {
    if (idTable) {
      dispatch(getServerOneTable(idTable))
    }
  }, [dispatch, idTable])

  if (idTable && !tableEdit?.id) {
    return (
      <div>
        <Typography.Title strong>Loading...</Typography.Title>
        <Typography.Title strong><LoadingOutlined /></Typography.Title>
      </div>
    )
  }

  function onFinish(value) {
    const tableDate = { ...tableEdit, ...value }

    dispatch(saveTable(tableDate))

    navigate('/tables')
  }

  return (
    <Form
      initialValues={tableEdit}
      onFinish={onFinish}
      autoComplete="off"
      layout='inline'
      className='form'
    >
      <Form.Item
        name="number"
        rules={[
          // () => ({
          //   validator(_, value) {
          //     if (!value === value) {
          //       return Promise.reject(new Error('WRONG'));
          //     }
          //     return Promise.resolve();
          //   },
          // }),
          {
            required: true,
            message: 'Please input your number!',
          },
        ]}
      >
        <Input prefix={<FormOutlined />} placeholder="Enter table number" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}