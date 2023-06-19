import { Button } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectWaiterList } from "../../selectors";
import {clearEditWaiter, getServerWaiters} from "../../store/actions/waiterAction";
import { useEffect } from "react";
import WaiterCardItem from "../waiters/WaiterCardItem";

export default function WaiterCard() {
  const listInit = useSelector(selectWaiterList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getServerWaiters())
  }, [dispatch])

  function onAddBtnClick() {
    dispatch(clearEditWaiter())
  }

  const waiterListCard = listInit.map(waiter => (
    <WaiterCardItem
      key={waiter.id}
      waiter={waiter}
    />
  ))

  return (
    <div>
      <div>
        <Button type="primary" className='btn-add' onClick={onAddBtnClick}>
          <Link to='/waiters/create'>Add Waiter</Link>
        </Button>
      </div>
      {waiterListCard}
    </div>
  )
}