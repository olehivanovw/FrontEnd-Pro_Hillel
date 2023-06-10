import { Button, Card, Space } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearEditWaiter, removeWaiter } from "../../store/actions/waiterAction";

export default function WaiterCardItem({ waiter }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function onEditBtnClick() {
    dispatch(clearEditWaiter())
    navigate(`${waiter.id}/edit`)
  }

  function onDeleteBtnClick() {
    dispatch(removeWaiter(waiter))
  }

  return (
    <Space size={16}>
      <Card className='card'>
        <Card.Meta
          title={waiter.firstName}
          description={`Phone: ${waiter.phone}`}
        />
        <Space wrap className='card-block-btn'>
          <Button onClick={onEditBtnClick}>Edit</Button>
          <Button danger onClick={onDeleteBtnClick}>Delete</Button>
        </Space>
      </Card>
    </Space>
  )
}