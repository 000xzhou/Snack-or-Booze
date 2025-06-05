import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./static/App.css";
import SnackOrBoozeApi from "./Api";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
// food items
import FoodMenu from "./components/snacks/FoodMenu";
import FoodItem from "./components/snacks/FoodItem";
import AddFood from "./components/snacks/AddFood";
// drink items
import DrinkMenu from "./components/drinks/DrinkMenu";
import DrinkItem from "./components/drinks/DrinkItem";
import AddDrink from "./components/drinks/AddDrink";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  // Fetching both snacks and drinks from fake API
  const fetchData = async () => {
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
  };
  // grab fake api on load
  useEffect(() => {
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

            <Route path="/snacks">
              <Route
                index
                element={<FoodMenu snacks={snacks} title="Snacks" />}
              />
              <Route
                path=":id"
                element={<FoodItem items={snacks} cantFind="/snacks" />}
              />
              <Route
                path="new"
                element={<AddFood title="New Snack" refetch={fetchData} />}
              />
            </Route>

            <Route path="/drinks">
              <Route
                index
                element={<DrinkMenu drinks={drinks} title="Drinks" />}
              />
              <Route
                path=":id"
                element={<DrinkItem items={drinks} cantFind="/drinks" />}
              />
              <Route
                path="new"
                element={<AddDrink title="New Drink" refetch={fetchData} />}
              />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
