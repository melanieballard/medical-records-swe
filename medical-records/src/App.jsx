import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getMovie } from "./api";
import './App.css';

function App() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovie("Back to the Future")
      .then(setMovie)
      .catch(err => setError(err.message));
  }, []);

  return (
    <Container fluid className="d-flex vh-100">
      <Row className="m-auto text-center">
        <Col>
          <h1>Medical Records</h1>
        </Col>
      </Row>
      <Row className="m-auto text-center">
        <Col>
          {error && <p style={{ color: "red" }}>Error: {error}</p>}
          {movie ? (
            <pre>{JSON.stringify(movie, null, 2)}</pre>
          ) : (
            <p>Loading...</p>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
