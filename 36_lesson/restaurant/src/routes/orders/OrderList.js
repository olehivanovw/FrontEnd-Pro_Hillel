import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import getColumnsOrder from "./getColumnsOrder";
import { selectCommonOrders } from "../../selectors";
import { useEffect } from "react";
import getCommonOrders from "../../store/actions/commonAction";
import { Button, Table } from "antd";

export default function OrderList() {
  const listInit = useSelector(selectCommonOrders)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const columns = getColumnsOrder(dispatch, navigate)

  useEffect(() => {
    dispatch(getCommonOrders())
  }, [dispatch])

  return (
    <div>
      <div>
        <Button type="primary" className='btn-add'>
          <Link to='/create'>Add Order</Link>
        </Button>
      </div>
      <Table rowKey={'id'} columns={columns} dataSource={listInit} />
    </div>
  )
}