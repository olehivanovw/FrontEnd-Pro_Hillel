import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getServerUsers } from "../../store/action/userAction";
import UserItem from "./UserItem";
import { selectList } from "../../selectors/gallery";

export default function User () {
  const listInit = useSelector(selectList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getServerUsers())
  }, [dispatch])

  const userList = listInit.map(user => (
    <UserItem
      key={user.id}
      user={user}
    />
  ))

  return (
    <ul className='list'>
      {userList}
    </ul>
  )
}