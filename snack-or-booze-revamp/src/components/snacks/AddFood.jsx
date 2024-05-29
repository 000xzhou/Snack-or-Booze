import { Card, CardBody, CardTitle } from "reactstrap";

function AddFood({ items }) {
  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Add a new snack!
          </CardTitle>
          <form>
            <label htmlFor="snackName">Snack Name:</label>
            <input
              type="text"
              id="snackName"
              placeholder="Enter a snack name"
            />
          </form>
        </CardBody>
      </Card>
    </section>
  );
}

export default AddFood;
