import axios from "axios";

const BASE_API_URL = "http://localhost:3000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {
  static async getSnacksAndDrinks() {
    // Fetching both snacks and drinks from fake API
    try {
      const [getSnacks, getDrinks] = await Promise.all([
        axios.get(`${BASE_API_URL}/snacks`),
        axios.get(`${BASE_API_URL}/drinks`),
      ]);

      return {
        snacks: getSnacks.data,
        drinks: getDrinks.data,
      };
    } catch (error) {
      console.error("Error fetching data", error);
      throw error;
    }
  }
}

export default SnackOrBoozeApi;
