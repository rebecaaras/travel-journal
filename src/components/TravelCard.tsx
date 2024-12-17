export default function TravelCard(){
    return(
        <div className="travel-card">
            <img src="src/assets/mount-fuji.jpg" alt="travel image"/>
            <div className="info-container">
                <div className="location">
                    <img src="src/assets/location-pin.png" alt="location icon" />
                    <span>Japan</span>
                    <a href="" className="maps-link">View on Google Maps</a>
                </div>
                <div className="title">Mount Fuji</div>
                <span className="date">12 Jan, 2023 - 24 Jan, 2023</span>
                <div className="description">
                    <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                </div>
            </div>
        </div>
    )};
