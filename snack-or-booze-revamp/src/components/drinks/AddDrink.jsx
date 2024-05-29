import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import useFormData from "../hooks/useFormData";

function AddDrink() {
  // adding initial data for form data state
  const initialState = {
    drinkName: "",
    description: "",
    recipe: "",
    serve: "",
  };
  // add field for error handling
  const fields = ["drinkName", "description", "recipe", "serve"];

  const [formData, handleChange, handleStyling, handleSubmit] = useFormData(
    "drinks",
    initialState,
    fields
  );

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Add a new drink!
          </CardTitle>
          <ListGroup>
            <form onSubmit={handleSubmit}>
              <ListGroupItem>
                <label htmlFor="drinkName">Drink Name:</label>
                <input
                  type="text"
                  className={handleStyling("drinkName")}
                  id="drinkName"
                  name="drinkName"
                  placeholder="Enter a drink name"
                  value={formData.drinkName}
                  onChange={handleChange}
                />
              </ListGroupItem>
              <ListGroupItem>
                <label htmlFor="description">Description:</label>
                <input
                  type="text"
                  className={handleStyling("description")}
                  id="description"
                  name="description"
                  placeholder="Enter the drink description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </ListGroupItem>
              <ListGroupItem>
                <label htmlFor="recipe">Recipe:</label>
                <input
                  type="text"
                  className={handleStyling("recipe")}
                  id="recipe"
                  name="recipe"
                  placeholder="Enter the drink recipe"
                  value={formData.recipe}
                  onChange={handleChange}
                />
              </ListGroupItem>
              <ListGroupItem>
                <label htmlFor="serve">Serve:</label>
                <input
                  type="text"
                  id="serve"
                  className={handleStyling("serve")}
                  name="serve"
                  placeholder="Enter how the drink be serve"
                  value={formData.serve}
                  onChange={handleChange}
                />
              </ListGroupItem>
              <ListGroupItem>
                <button>Submit Drink</button>
              </ListGroupItem>
            </form>
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default AddDrink;
