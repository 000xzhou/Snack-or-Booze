import { useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import useCantFind from "./hooks/useCantFind";

function ItemDetail({ items, cantFind }) {
  const { id } = useParams();
  const item = useCantFind(id, items, cantFind);

  if (!item) return null;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {item.name}
          </CardTitle>
          <CardText className="font-italic">{item.description}</CardText>
          <p>
            <b>Recipe:</b> {item.recipe}
          </p>
          <p>
            <b>Serve:</b> {item.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default ItemDetail;
