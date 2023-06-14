import { Button, Space } from "antd";
import { clearEditOrder, removeOrder } from "../../store/actions/orderAction";

export default function getColumnsOrder(dispatch, navigate) {
  function onEditBtnClick(order) {
    dispatch(clearEditOrder())
    navigate(`${order.id}/edit`)
  }

  function onCalculateBtnClick(order) {
    dispatch(clearEditOrder())
    navigate(`${order.id}/calculate`)
  }

  function onDeleteBtnClick(order) {
    dispatch(removeOrder(order))
  }

  return [
    {
      title: '№',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
    },
    {
      title: 'Table',
      dataIndex: 'tableId',
      key: 'tableId',
      align: 'center',
      render: (_, order) => order.table.number
    },
    {
      title: 'Waiter',
      dataIndex: 'waiterId',
      key: 'waiterId',
      align: 'center',
      render: (_, order) => order.waiter.firstName
    },
    {
      title: 'Action',
      dataIndex: 'Action',
      key: 'Action',
      align: 'center',
      render: (_, order) => (
        <Space>
          <Button onClick={() => onEditBtnClick(order)}>Edit</Button>
          <Button danger onClick={() => onDeleteBtnClick(order)}>Delete</Button>
          <Button type="dashed" onClick={() => onCalculateBtnClick(order)}>Calculate</Button>
        </Space>
      )
    },
  ]
}