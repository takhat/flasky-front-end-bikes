import "./App.css";
import BikeList from "./components/BikeList";
import Navbar from "./components/Navbar";

function App() {
  const bikesList = [
    {
      id: 1,
      name: "My Bike",
      size: 50,
      price: 100,
      type: "special",
    },
    {
      id: 2,
      name: "Another Bike",
      size: 30,
      price: 90,
      type: "duplicate",
    },
    {
      id: 3,
      name: "Expensive Bike",
      size: 45,
      price: 900,
      type: "expensive",
    },
  ];

  return (
    <div>
      <Navbar />
      <BikeList bikesList={bikesList} />
      <button>Add Bike</button>
    </div>
  );
}

export default App;
