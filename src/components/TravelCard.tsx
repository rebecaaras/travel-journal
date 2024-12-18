export default function TravelCard(props) {
  const {imageUrl, imageAlt,  country,  mapsUrl,  title,  date,  text} = props

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
