import { Button, Card, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { selectTableList } from "../../selectors";
import { useEffect } from "react";
import { getServerTables } from "../../store/actions/tableAction";
import { Link } from "react-router-dom";

export default function TableCard () {
  const listInit = useSelector(selectTableList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getServerTables())
  }, [dispatch])

  function onEditBtnClick() {
    console.log('WORK EDIT')
  }

  function onDeleteBtnClick() {
    console.log('WORK DELETE')
  }

  const tableListCard = listInit.map(table => (
    <Space key={table.id} size={16}>
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
  ))

  return (
    <div>
      <div>
        <Button type="primary" className='btn-add'>
          <Link to='/tables/create'>Add Table</Link>
        </Button>
      </div>
      {tableListCard}
    </div>
  );
}