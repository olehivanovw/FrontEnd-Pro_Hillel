import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getAlbumPhotos } from "../../store/action/userAction";
import PhotoItem from "./PhotoItem";

export default function Photo() {
  const dispatch = useDispatch()
  let { id } = useParams();
  const photoInit = useSelector(state => state.user.photo)

  useEffect(() => {
    if (id) {
      dispatch(getAlbumPhotos(id))
    }
  }, [dispatch, id])

  const photoList = photoInit.map(photo => (
    <PhotoItem
      key={photo.id}
      photo={photo}
    />
  ))

  return (
    <div>
      <Link to={`/albums/${id}`} className='navigation'><button>BACK TO ALBUM LIST</button></Link>
      {photoList}
    </div>
  )
}