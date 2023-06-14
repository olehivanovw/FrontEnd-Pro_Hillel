import { Button, Space } from "antd";
import { clearEditDish, removeDish } from "../../store/actions/dishAction";

export default function getColumnsDish(dispatch, navigate) {
  function onEditBtnClick(dish) {
    dispatch(clearEditDish())
    navigate(`${dish.id}/edit`)
  }

  function onDeleteBtnClick(dish) {
    dispatch(removeDish(dish))
  }

  return [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      align: 'center',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      align: 'center',
    },
    {
      title: 'Action',
      dataIndex: 'Action',
      key: 'Action',
      align: 'center',
      render: (_, dish) => (
        <Space>
          <Button onClick={() => onEditBtnClick(dish)}>Edit</Button>
          <Button danger onClick={() => onDeleteBtnClick(dish)}>Delete</Button>
        </Space>
      )
    },
  ]
}