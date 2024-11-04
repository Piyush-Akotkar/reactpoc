import { Container, Row, Col } from "react-bootstrap";
import CardsContainer from "./components/CardsContainer";
import MapContainer from "./components/MapContainer";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Container className="mt-4">
        <CardsContainer />
        <MapContainer />
        <Row className="mt-4">
          <Col md={6}>
            <BarChart />
          </Col>
          <Col md={6}>
            <PieChart />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
