import { Button, Form, Input } from "antd";
import { FormOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { selectTableEdit, selectTableList } from "../../selectors";
import { useNavigate, useParams } from "react-router-dom";
import { getServerOneTable, saveTable } from "../../store/actions/tableAction";
import { rulesForm } from "../../extra/rulesForm";
import FormWrapper from "../../extra/FormWrapper";

export default function TableForm () {
  const tableEdit = useSelector(selectTableEdit)
  const listInit = useSelector(selectTableList)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let { idTable } = useParams()

  function onFinish(value) {
    const tableDate = { ...tableEdit, ...value }

    dispatch(saveTable(tableDate))

    navigate('/tables')
  }

  return (
    <FormWrapper id={idTable} editId={tableEdit?.id} oneFetch={getServerOneTable}>
      <Form
        initialValues={tableEdit}
        onFinish={onFinish}
        autoComplete="off"
        layout='horizontal'
        className='form'
      >
        <Form.Item
          name="number"
          rules={[
            {
              validator: (_, value) => {
                const validateList = listInit.map(tableItem => {
                  return Number(tableItem.number)
                })

                if (validateList.includes(Number(value))) {
                  return Promise.reject(new Error('Your must enter non-repeating number!'));
                }
                return Promise.resolve();
              },
            },
            rulesForm.table,
          ]}
        >
          <Input prefix={<FormOutlined />} placeholder="Enter table number" type='number' className='input' />
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