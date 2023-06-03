import { useDispatch, useSelector } from "react-redux";
import AlbumItem from "./AlbumItem";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getUserAlbums } from "../../store/action/userAction";

export default function Album() {
  const dispatch = useDispatch()
  let { id } = useParams();
  const albumsInit = useSelector(state => state.user.album)

  useEffect(() => {
    if (id) {
      dispatch(getUserAlbums(id))
    }
  }, [dispatch, id])

  const albumList = albumsInit.map(album => (
    <AlbumItem
      key={album.id}
      album={album}
    />
  ))

  return (
    <div>
      <Link to='/' className='navigation'><button>BACK TO USERS LIST</button></Link>
      <ul className='list'>
        {albumList}
      </ul>
    </div>

  )
}