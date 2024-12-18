export default function TravelCard(props) {
  const imageUrl = props.imageUrl
  const imageAlt = props.alt
  const country = props.country
  const mapsUrl = props.mapsUrl
  const title = props.title
  const date = props.date
  const text = props.text

  return (
    <div className="travel-card">
      <div className="main-image-container">
        <img src={imageUrl} alt={imageAlt} />
      </div>
      <div className="info-container">
        <div className="location">
          <img src="src/assets/location-pin.png" alt="location icon" />
          <span>{country}</span>
          <a href={mapsUrl} className="maps-link">
            View on Google Maps
          </a>
        </div>
        <div className="title">{title}</div>
        <span className="date">{date}</span>
        <div className="description">
          <p>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
