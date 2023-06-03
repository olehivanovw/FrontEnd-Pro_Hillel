import { useNavigate } from "react-router-dom";

export default function AlbumItem ({ album }) {
  const navigate = useNavigate()

  function onPhotoBtnClick() {
    navigate(`${album.id}/photo`)
  }

  return (
    <li className='item'>
      <span className='item-text'>Album: {album.title}</span>
      <button className='item-btn' onClick={onPhotoBtnClick}>Show photo</button>
    </li>
  )
}