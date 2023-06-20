import './index.css'

import {AiOutlineDelete} from 'react-icons/ai'

const TrackItem = props => {
  const {trackItemDetails, deleteTrack} = props
  const {id, imageUrl, name, genre, duration} = trackItemDetails

  const onDeleteTrack = () => {
    deleteTrack(id)
  }

  return (
    <li className="each-track">
      <div className="image-name-and-genre-container">
        <img src={imageUrl} alt="track" className="track-image" />
        <div className="name-and-genre-container">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration-and-delete-btn-container">
        <p className="duration">{duration}</p>
        <button
          type="button"
          className="delete-btn"
          onClick={onDeleteTrack}
          data-testid="delete"
        >
          <AiOutlineDelete size="20" />
        </button>
      </div>
    </li>
  )
}

export default TrackItem
