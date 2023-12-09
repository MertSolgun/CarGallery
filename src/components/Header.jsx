import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

function Header({ handleChange }) {
  return (
    <div className="header">
      <h1>Car Gallery</h1>
      <InputGroup size="sm" className="mb-3" id="input">
        <Form.Control
          aria-label="Small"
          type="text"
          aria-describedby="inputGroup-sizing-sm"
          onChange={handleChange}
        />
      </InputGroup>
    </div>
  );
}

export default Header;
