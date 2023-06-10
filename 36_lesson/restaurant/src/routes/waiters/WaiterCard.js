import { Button } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectWaiterList } from "../../selectors";
import { getServerWaiters } from "../../store/actions/waiterAction";
import { useEffect } from "react";
import WaiterCardItem from "../waiters/WaiterCardItem";

export default function WaiterCard() {
  const listInit = useSelector(selectWaiterList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getServerWaiters())
  }, [dispatch])

  const waiterListCard = listInit.map(waiter => (
    <WaiterCardItem
      key={waiter.id}
      waiter={waiter}
    />
  ))

  return (
    <div>
      <div>
        <Button type="primary" className='btn-add'>
          <Link to='/waiters/create'>Add Waiter</Link>
        </Button>
      </div>
      {waiterListCard}
    </div>
  )
}