import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";

const NotFound = () => {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h1>404</h1>
            <p>Oops! The page you're looking for doesn't exist.</p>
            <Link to="/">Go Back to Home</Link>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
};

export default NotFound;
