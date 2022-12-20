import { useState } from "react";
import "./App.css";
import BikeList from "./components/BikeList";
import Navbar from "./components/Navbar";

const INITIALBIKES = [
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

function App() {
  const initialCopy = INITIALBIKES.map((bike) => {
    return { ...bike };
  });

  const [bikesList, setBikesList] = useState(initialCopy);

  const updatePrice = (bikeId, updatedPrice) => {
    console.log("updatePrice called");
    const newBikesArr = [];
    for (const bike of bikesList) {
      if (bikeId !== bike.id) {
        newBikesArr.push(bike);
      } else {
        const newBike = {
          ...bike,
          price: updatedPrice,
        };
        newBikesArr.push(newBike);
      }
    }
    setBikesList(newBikesArr);
  };
  const deleteBike = (bikeId) => {
    console.log("deleteBike called");
    const newBikesArr = [];
    for (const bike of bikesList) {
      if (bikeId !== bike.id) {
        newBikesArr.push(bike);
      }
    }
    setBikesList(newBikesArr);
  };

  return (
    <div>
      <Navbar />
      <BikeList
        bikesList={bikesList}
        updatePrice={updatePrice}
        deleteBike={deleteBike}
      />
      <button>Add Bike</button>
    </div>
  );
}

export default App;
