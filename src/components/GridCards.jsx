import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import BlockExample from "./BlockExample";
import user from "../assets/images/user-avatar.svg"
import Map from "../assets/images/Map.png"
import packageicon from "../assets/images/packageicon.png"
import { HiOutlineDotsVertical } from "react-icons/hi";

function GridCards() {
  return (
    <div style={{ overflowX: 'hidden' }}> {/* Ensure no horizontal scroll */}
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col key={idx} lg={4} md={6}> {/* Adjust column size to fit better */}
            <Card className="card-component h-100"> {/* Add h-100 for consistent card height */}
              <Card.Body className="card-body">
                <Card.Text className="title-bar-wrapper">
                  <div className="title-bar">
                    <div className="title-bar-comp1">
                      <img src={packageicon} alt="package icon" />
                      <p>LOAD: 333123</p>
                    </div>
                    <div className="title-bar-comp2">
                      <button>Complete</button>
                      <HiOutlineDotsVertical />
                    </div>
                  </div>
                </Card.Text>
                <Card.Text className="driver-bar">
                  <div className="driver-text">DRIVER:</div>
                  <div className="driver-data">
                    <img src={user} alt="driver" />
                    <p>Maxwell</p>
                  </div>
                </Card.Text>
                <Card.Text className="status-bar">
                  <p className="p1">PARTNER COMPANY:</p>
                  <p className="p2">Bank of America</p>
                </Card.Text>
                <Card.Img variant="top" src={Map} className="map-img" />
                <Card.Text className="rate-bar">
                  <p className="p1">Rate:</p>
                  <p className="p2">$928.41</p>
                </Card.Text>
                <BlockExample />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default GridCards;
