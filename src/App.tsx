import Header from "./components/Header";
import TravelCard from "./components/TravelCard";

export default function App() {
  return (
    <main>
      <Header />
      <div className="cards-container">
        <TravelCard/>
      </div>
    </main>
  );
}
