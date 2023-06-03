export default function PhotoItem ({ photo }) {
  return (
    <img className='img' src={photo.thumbnailUrl} alt="defaultPhoto" />
  )
}
