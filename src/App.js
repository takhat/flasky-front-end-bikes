import { useState, useEffect } from "react";
import "./App.css";
import BikeList from "./components/BikeList";
import Navbar from "./components/Navbar";
import axios from "axios";
import NewBikeForm from "./components/NewBikeForm";

// const INITIALBIKES = [
//   {
//     id: 1,
//     name: "My Bike",
//     size: 50,
//     price: 100,
//     type: "special",
//   },
//   {
//     id: 2,
//     name: "Another Bike",
//     size: 30,
//     price: 90,
//     type: "duplicate",
//   },
//   {
//     id: 3,
//     name: "Expensive Bike",
//     size: 45,
//     price: 900,
//     type: "expensive",
//   },
// ];

function App() {
  const [bikesList, setBikesList] = useState([]);
  const URL = "http://127.0.0.1:5000/bike";

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        console.log(res);
        const bikesAPIResponseCopy = res.data.map((bike) => {
          return {
            ...bike,
          };
        });
        setBikesList(bikesAPIResponseCopy);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const initialCopy = bikesAPIResponseCopy.map((bike) => {
  //   return { ...bike };
  // });

  const updatePrice = (bikeId, updatedPrice) => {
    console.log("updatePrice called");

    const newBikesArr = [];
    axios
      .patch(`${URL}/${bikeId}/${updatedPrice}`)
      .then((res) => {
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
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteBike = (bikeId) => {
    console.log("deleteBike called");

    const newBikesArr = [];
    axios
      .delete(`${URL}/${bikeId}`)
      .then((res) => {
        for (const bike of bikesList) {
          if (bikeId !== bike.id) {
            newBikesArr.push(bike);
          }
        }
        setBikesList(newBikesArr);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar />
      <BikeList
        bikesList={bikesList}
        updatePrice={updatePrice}
        deleteBike={deleteBike}
      />
      <NewBikeForm />
    </div>
  );
}

export default App;
