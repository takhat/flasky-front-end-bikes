import "./App.css";
import BikeList from "./components/BikeList";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <BikeList />
      <button>Add Bike</button>
    </div>
  );
}

export default App;
