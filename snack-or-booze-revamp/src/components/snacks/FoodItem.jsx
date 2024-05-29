import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { useParams } from "react-router-dom";
import useCantFind from "../hooks/useCantFind";

function FoodItem({ items, cantFind }) {
  const { id } = useParams();
  const snack = useCantFind(id, items, cantFind);

  if (!snack) return null;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {snack.name}
          </CardTitle>
          <CardText className="font-italic">{snack.description}</CardText>
          <p>
            <b>Recipe:</b> {snack.recipe}
          </p>
          <p>
            <b>Serve:</b> {snack.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodItem;
