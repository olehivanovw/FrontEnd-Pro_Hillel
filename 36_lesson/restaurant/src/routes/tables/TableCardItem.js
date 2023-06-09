import { Button, Card, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearEditTable, removeTable } from "../../store/actions/tableAction";

export default function TableCardItem({table}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function onEditBtnClick() {
    dispatch(clearEditTable())
    navigate(`${table.id}/edit`)
  }

  function onDeleteBtnClick() {
    dispatch(removeTable(table))
  }

  return (
    <Space size={16}>
      <Card
        title={`TABLE № ${table.number}`}
        className='card'
      >
        <Space wrap>
          <Button onClick={onEditBtnClick}>Edit</Button>
          <Button danger onClick={onDeleteBtnClick}>Delete</Button>
        </Space>
      </Card>
    </Space>
  )
}