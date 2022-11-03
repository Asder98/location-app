import { useEffect } from "react";
import "./App.css";
import {
  fetchLocationDetails,
  fetchUserLocationDetails,
} from "./store/location-slice";
import { useAppDispatch } from "./store/store";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserLocationDetails());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
