import { clearEdit, removeContact, statusContact } from "../../store/actions/contactAction";
import {Button, Checkbox, Space} from "antd";

export default function getColumnsContact(dispatch, navigate) {
  function onEditBtnClick(contact) {
    dispatch(clearEdit())
    navigate(`${contact.id}/edit/`)
  }

  function onDeleteBtnClick(contact) {
    dispatch(removeContact(contact))
  }

  function onLiClick (contact) {
    dispatch(statusContact(contact))
  }

  return [
    {
      title: 'Status',
      dataIndex: 'done',
      key: 'done',
      render: (value, contact) => <Checkbox onClick={() => onLiClick(contact)}  checked={value} />
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Surname',
      dataIndex: 'surname',
      key: 'surname',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Action',
      dataIndex: 'Action',
      key: 'Action',
      render: (_, contact) => (
        <Space wrap>
          <Button onClick={() => onEditBtnClick(contact)}>Edit</Button>
          <Button onClick={() => onDeleteBtnClick(contact)}>Delete</Button>
        </Space>
      )
    },
  ]
}