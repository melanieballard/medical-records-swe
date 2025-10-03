import { Container, Row, Col } from "react-bootstrap";
import './App.css';

function App() {
  return (
    <Container fluid className="d-flex vh-100">
      <Row className="m-auto text-center">
        <Col>
          <h1>Medical Records</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
