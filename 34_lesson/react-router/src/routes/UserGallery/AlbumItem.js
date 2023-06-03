// import { useDispatch } from "react-redux";
// import { getAlbumPhotos } from "../../store/action/userAction";
import { useNavigate } from "react-router-dom";

export default function AlbumItem ({ album }) {
  // const dispatch = useDispatch()
  const navigate = useNavigate()

  function onPhotoBtnClick() {
    // dispatch(getAlbumPhotos(album))
    navigate(`/photo/${album.id}`)
  }

  return (
    <li className='item'>
      <span className='item-text'>Album: {album.title}</span>
      <button className='item-btn' onClick={onPhotoBtnClick}>Show photo</button>
    </li>
  )
}