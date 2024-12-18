import Header from "./components/Header";
import TravelCard from "./components/TravelCard";

export default function App() {
  return (
    <main>
      <Header />
      <div className="cards-container">
        <TravelCard 
          imageUrl = "src/assets/mount-fuji.jpg" 
          alt = "Mount Fuji picture"
          country = "Japan" 
          mapsUrl=""
          title = "Mount Fuji"
          date = "12 Jan, 2023 - 24 Jan, 2023"
          text = "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        />
        <TravelCard 
          imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Sydney_Australia._%2821339175489%29.jpg/375px-Sydney_Australia._%2821339175489%29.jpg" 
          alt = "Sydney Opera House picture"
          country = "AUSTRALIA" 
          mapsUrl=""
          title = "Sydney Opera House"
          date = "27 May, 2023 - 8 Jun, 2023"
          text = "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."
        />
        <TravelCard 
          imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Fiordo_de_Geiranger_desde_Flydalsjuvet%2C_Noruega%2C_2019-09-07%2C_DD_59.jpg/375px-Fiordo_de_Geiranger_desde_Flydalsjuvet%2C_Noruega%2C_2019-09-07%2C_DD_59.jpg" 
          alt = "Geirangerfjord picture"
          country = "NORWAY" 
          mapsUrl=""
          title = "Geirangerfjord"
          date = "01 Oct, 2024 - 18 Nov, 2024"
          text = "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
        />
        <TravelCard 
          imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Brazil-Len%C3%A7ois-Maranhenses.jpg/420px-Brazil-Len%C3%A7ois-Maranhenses.jpg" 
          alt = "Lençóis Maranhenses picture"
          country = "Brazil" 
          mapsUrl=""
          title = "Maranhão"
          date = "01 Dez, 2024 - 15 Dez, 2024"
          text = "With large, white, sweeping dunes, Lençóis Maranhenses looks like a typical desert, but in fact it is not one. Being just outside the Amazon Basin, the region gets a regular rainy season in first half of the year."
        />
      </div>
    </main>
  );
}
