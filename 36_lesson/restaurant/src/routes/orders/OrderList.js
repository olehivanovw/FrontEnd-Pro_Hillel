import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import getColumnsOrder from "./getColumnsOrder";
import { selectCommonOrders } from "../../selectors";
import { useEffect } from "react";
import getCommonOrders from "../../store/actions/commonAction";
import { Button, Table } from "antd";
import { clearEditOrder } from "../../store/actions/orderAction";

export default function OrderList() {
  const listInit = useSelector(selectCommonOrders)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const columns = getColumnsOrder(dispatch, navigate)

  useEffect(() => {
    dispatch(getCommonOrders())
  }, [dispatch])

  function onAddBtnClick() {
    dispatch(clearEditOrder())
  }

  return (
    <div>
      <div>
        <Button type="primary" className='btn-add' onClick={onAddBtnClick}>
          <Link to='/create'>Add Order</Link>
        </Button>
      </div>
      <Table rowKey={'id'} columns={columns} dataSource={listInit} className='table' />
    </div>
  )
}