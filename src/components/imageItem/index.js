import './index.css'

const ImageItem = props => {
  const {items} = props
  const {imageUrl, imageAltText} = items
  return (
    <li className="photos">
      <img src={imageUrl} alt={imageAltText} className="image" />
    </li>
  )
}
export default ImageItem
