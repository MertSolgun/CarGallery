import Card from "react-bootstrap/Card";

function Cars({ filterinput }) {
  return filterinput.map((item, index) => (
    <div key={index}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.image} id="img" />
        <Card.Body>
          <Card.Title id="brand-model">
            <div>{item.make}</div>
            <div>{item.model}</div>
          </Card.Title>
          <Card.Text className="fw-bold text-success">
            Years:{item.year}
          </Card.Text>
          <Card.Text className="fw-bold text-danger">
            Type:{item.type}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  ));
}
export default Cars;
