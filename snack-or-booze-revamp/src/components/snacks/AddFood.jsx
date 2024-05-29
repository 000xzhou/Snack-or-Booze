import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { useState } from "react";
import axios from "axios";

function AddFood() {
  // adding initial data for form data state
  const initialState = {
    snackName: "",
    description: "",
    recipe: "",
    serve: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  // changing state of form
  const handleChange = (e) => {
    // changing value for state base on target name
    setFormData((data) => ({ ...data, [e.target.name]: e.target.value }));

    // setting error for that target names to false : no error
    setErrors({
      ...errors,
      [e.target.name]: false,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // checking for empty data
    const newErrors = {};
    const fields = ["snackName", "description", "recipe", "serve"];

    // checks each data file if there is any errors
    fields.forEach((field) => {
      if (formData[field].trim() === "") {
        newErrors[field] = true;
      }
    });

    // checks if error obj is empty : if there is any errors
    if (Object.keys(newErrors).length === 0) {
      try {
        // Post to server after form submit
        const response = await axios.post("http://localhost:3000/snacks", {
          id: formData.snackName,
          name: formData.snackName,
          description: formData.description,
          recipe: formData.recipe,
          serve: formData.serve,
        });
        console.log("Snack added:", response.data);
        // Reset the snack state after a successful post
        setFormData(initialState);
      } catch (error) {
        console.error("Error adding snack:", error);
      }
    } else {
      // execute errors
      setErrors(newErrors);
    }
  };

  // handle styling
  const handleStyling = (name) => {
    return errors[name] ? "input-error" : "";
  };

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
