import './index.css'

const ThumbnailItem = props => {
  const {items, updateImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = items
  const changeImg = () => {
    updateImage(id)
  }
  const changeStyle = isActive === true ? 'Style' : ''
  return (
    <li className="thumbnail">
      <button className="btn" type="button" onClick={changeImg}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`tImage ${changeStyle}`}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
