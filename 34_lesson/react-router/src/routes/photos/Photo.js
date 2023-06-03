import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getAlbumPhotos } from "../../store/action/userAction";
import PhotoItem from "./PhotoItem";
import { selectPhoto } from "../../selectors/gallery";

export default function Photo() {
  const dispatch = useDispatch()
  let { idUser, idAlbum } = useParams();
  const photoInit = useSelector(selectPhoto)

  useEffect(() => {
    if (idAlbum) {
      dispatch(getAlbumPhotos(idAlbum))
    }
  }, [dispatch, idAlbum])

  const photoList = photoInit.map(photo => (
    <PhotoItem
      key={photo.id}
      photo={photo}
    />
  ))

  return (
    <div>
      <Link to={`/users/${idUser}/albums`} className='navigation'><button>BACK TO ALBUM LIST</button></Link>
      {photoList}
    </div>
  )
}