import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./static/App.css";
import SnackOrBoozeApi from "./Api";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import FoodMenu from "./components/snacks/FoodMenu";
import FoodItem from "./components/snacks/FoodItem";
import DrinkMenu from "./components/drinks/DrinkMenu";
import DrinkItem from "./components/drinks/DrinkItem";
import NotFound from "./components/NotFound";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  // Fetching both snacks and drinks from fake API
  useEffect(() => {
    async function fetchData() {
      try {
        const [snacksData, drinksData] = await Promise.all([
          SnackOrBoozeApi.getSnacks(),
          SnackOrBoozeApi.getDrinks(),
        ]);

        setSnacks(snacksData);
        setDrinks(drinksData);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
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
            <Route
              path="/"
              element={<Home snacks={snacks} drinks={drinks} />}
            />
            <Route
              path="/snacks"
              element={<FoodMenu snacks={snacks} title="Snacks" />}
            />
            <Route
              path="/snacks/:id"
              element={<FoodItem items={snacks} cantFind="/snacks" />}
            />
            <Route
              path="/drinks"
              element={<DrinkMenu drinks={drinks} title="Drinks" />}
            />
            <Route
              path="/drinks/:id"
              element={<DrinkItem items={drinks} cantFind="/drinks" />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
