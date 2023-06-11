import { Button, Space } from "antd";
import { clearEditOrder } from "../../store/actions/orderAction";

export default function getColumnsOrder(dispatch, navigate) {
  function onEditBtnClick(order) {
    console.log('WORK EDIT')
    dispatch(clearEditOrder())
    navigate(`${order.id}/edit`)
  }

  function onCloseBtnClick() {
    console.log('WORK CLOSE')
  }

  return [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Table',
      dataIndex: 'tableId',
      key: 'tableId',
      render: (_, order) => order.table.number
    },
    {
      title: 'Waiter',
      dataIndex: 'waiterId',
      key: 'waiterId',
      render: (_, order) => order.waiter.firstName
    },
    {
      title: 'Action',
      dataIndex: 'Action',
      key: 'Action',
      render: (_, order) => (
        <Space>
          <Button type="primary" onClick={() => onEditBtnClick(order)}>Edit</Button>
          <Button type="primary" onClick={() => onCloseBtnClick(order)}>Close</Button>
        </Space>
      )
    },
  ]
}