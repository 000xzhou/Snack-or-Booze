import { Card, CardBody, CardTitle } from "reactstrap";

function AddDrink({ items }) {
  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Add a new drink!
          </CardTitle>
          <form>
            <label htmlFor="drinkName">Drink Name:</label>
            <input
              type="text"
              id="drinkName"
              placeholder="Enter a drink name"
            />
          </form>
        </CardBody>
      </Card>
    </section>
  );
}

export default AddDrink;
