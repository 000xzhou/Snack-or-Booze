import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import useFormData from "./hooks/useFormData";
import { useNavigate } from "react-router-dom";

function AddItem({ type, label, refetch }) {
  const navigate = useNavigate();

  const initialState = {
    name: "",
    description: "",
    recipe: "",
    serve: "",
  };

  const fields = ["name", "description", "recipe", "serve"];

  const [formData, handleChange, handleStyling, handleSubmitAPI] = useFormData(
    type === "drink" ? "drinks" : "snacks",
    initialState,
    fields
  );

  const handleSubmit = async (evt) => {
    await handleSubmitAPI(evt);
    if (refetch) refetch();
    const nav = type === "drink" ? "drinks" : "snacks";
    navigate(`/${nav}`);
  };

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Add a new {label}!
          </CardTitle>
          <ListGroup>
            <form onSubmit={handleSubmit}>
              <ListGroupItem>
                <label htmlFor="name">{label} Name:</label>
                <input
                  type="text"
                  className={handleStyling("name")}
                  id="name"
                  name="name"
                  placeholder={`Enter a ${label} name`}
                  value={formData.name}
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
                  placeholder={`Enter the ${label} description`}
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
                  placeholder={`Enter the ${label} recipe`}
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
                  placeholder={`Enter how the ${label} is served`}
                  value={formData.serve}
                  onChange={handleChange}
                />
              </ListGroupItem>
              <ListGroupItem>
                <button>Submit {label}</button>
              </ListGroupItem>
            </form>
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default AddItem;
