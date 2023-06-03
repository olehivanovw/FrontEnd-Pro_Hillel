import { useNavigate } from 'react-router-dom'

export default function UserItem ({ user }) {
  const navigate = useNavigate()

  function onAlbumsBtnClick() {
    navigate(`users/${user.id}/albums/`)
  }

  return (
    <li className='item'>
      <span className='item-text'>User: {user.name}</span>
      <button className='item-btn' onClick={onAlbumsBtnClick}>Show albums</button>
    </li>
  )
}