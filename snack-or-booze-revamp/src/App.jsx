import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./static/App.css";
import SnackOrBoozeApi from "./Api";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import FoodMenu from "./components/FoodMenu";
import FoodItem from "./components/FoodItem";
import NotFound from "./components/NotFound";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home snacks={snacks} />} />
            <Route
              path="/snacks"
              element={<FoodMenu snacks={snacks} title="Snacks" />}
            />
            <Route
              path="/snacks/:id"
              element={<FoodItem items={snacks} cantFind="/snacks" />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
