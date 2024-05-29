import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import useFormData from "../hooks/useFormData";

function AddFood() {
  // adding initial data for form data state
  const initialState = {
    snackName: "",
    description: "",
    recipe: "",
    serve: "",
  };
  // add field for error handling
  const fields = ["snackName", "description", "recipe", "serve"];

  const [formData, handleChange, handleStyling, handleSubmit] = useFormData(
    "snacks",
    initialState,
    fields
  );

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Add a new snack!
          </CardTitle>
          <ListGroup>
            <form onSubmit={handleSubmit}>
              <ListGroupItem>
                <label htmlFor="snackName">Snack Name:</label>
                <input
                  type="text"
                  className={handleStyling("snackName")}
                  id="snackName"
                  name="snackName"
                  placeholder="Enter a snack name"
                  value={formData.snackName}
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
                  placeholder="Enter the snack description"
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
                  placeholder="Enter the snack recipe"
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
                  placeholder="Enter how the snack be serve"
                  value={formData.serve}
                  onChange={handleChange}
                />
              </ListGroupItem>
              <ListGroupItem>
                <button>Submit Snack</button>
              </ListGroupItem>
            </form>
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default AddFood;
