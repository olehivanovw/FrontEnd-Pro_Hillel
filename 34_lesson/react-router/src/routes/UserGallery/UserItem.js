// import { useDispatch } from "react-redux";
// import { getUserAlbums } from "../../store/action/userAction";
import { useNavigate } from 'react-router-dom'

export default function UserItem ({ user }) {
  // const dispatch = useDispatch()
  const navigate = useNavigate()

  function onAlbumsBtnClick() {
    // dispatch(getUserAlbums(user))
    navigate(`/albums/${user.id}`)
  }

  return (
    <li className='item'>
      <span className='item-text'>User: {user.name}</span>
      <button className='item-btn' onClick={onAlbumsBtnClick}>Show albums</button>
    </li>
  )
}