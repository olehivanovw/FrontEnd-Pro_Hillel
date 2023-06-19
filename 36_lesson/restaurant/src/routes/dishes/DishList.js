import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearEditDish, getServerDishes } from "../../store/actions/dishAction";
import { Button, Table } from "antd";
import { selectDishList } from "../../selectors";
import getColumnsDish from "./getColumnsDish";

export default function DishList() {
  const listInit = useSelector(selectDishList)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const columns = getColumnsDish(dispatch, navigate)

  useEffect(() => {
    dispatch(getServerDishes())
  }, [dispatch])

  function onAddBtnClick() {
    dispatch(clearEditDish())
  }

  return (
    <div>
      <div>
        <Button type="primary" className='btn-add' onClick={onAddBtnClick}>
          <Link to='/dishes/create'>Add Dish</Link>
        </Button>
      </div>
      <Table rowKey={'id'} columns={columns} dataSource={listInit} className='table' />
    </div>
  )
}