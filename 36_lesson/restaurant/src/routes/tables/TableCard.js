import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { selectTableList } from "../../selectors";
import { useEffect } from "react";
import {clearEditTable, getServerTables} from "../../store/actions/tableAction";
import { Link } from "react-router-dom";
import TableCardItem from "./TableCardItem";

export default function TableCard () {
  const listInit = useSelector(selectTableList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getServerTables())
  }, [dispatch])

  function onAddBtnClick() {
    dispatch(clearEditTable())
  }

  const tableListCard = listInit.map(table => (
    <TableCardItem
      key={table.id}
      table={table}
    />
  ))

  return (
    <div>
      <div>
        <Button type="primary" className='btn-add' onClick={onAddBtnClick}>
          <Link to='/tables/create'>Add Table</Link>
        </Button>
      </div>
      {tableListCard}
    </div>
  );
}