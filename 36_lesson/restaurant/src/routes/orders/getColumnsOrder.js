import { Button, Space } from "antd";
import { clearEditOrder } from "../../store/actions/orderAction";

export default function getColumnsOrder(dispatch, navigate) {
  function onEditBtnClick(order) {
    dispatch(clearEditOrder())
    navigate(`${order.id}/edit`)
  }

  function onCalculateBtnClick(order) {
    dispatch(clearEditOrder())
    navigate(`${order.id}/calculate`)
  }

  return [
    {
      title: '№',
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
          <Button type="primary" onClick={() => onCalculateBtnClick(order)}>Calculate</Button>
        </Space>
      )
    },
  ]
}