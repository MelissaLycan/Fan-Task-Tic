import React from "react";
import "./Actions.css";
import { Container, Row, Col } from "react-bootstrap";

const ActionItems = [
  {
    name: "Share a Video",
    platform: "FaceBook",
    complete: false,
    actionValue: 25,
    input: ""
  },
  {
    name: "Share a Video",
    platform: "Instagram",
    complete: false,
    actionValue: 25,
    input: ""
  },
 {
    name: "Share a Video",
    platform: "YouTube",
    complete: false,
    actionValue: 25,
    input: ""
  },
  {
    name: "Share a Song",
    platform: "TikTok",
    complete: false,
    actionValue: 25,
    input: ""
  },
  {
    name: "Share a Song",
    platform: "Instagram",
    complete: false,
    actionValue: 25,
    input: ""
  },
  {
    name: "Buy Merch",
    platform: "FanTaskTic",
    complete: false,
    actionValue: 200,
    input: ""
  },
  {
    name: "Buy Tickets",
    platform: "EventBrite",
    complete: false,
    actionValue: 100,
    input: ""
  },
  {
    name: "Write a Review",
    platform: "WestWord",
    complete: true,
    actionValue: 500,
    input: "https://www.nordicdaughter.com/press"
  },
 {
    name: "Book us on a Festival",
    platform: "Events",
    complete: false,
    actionValue: 5000,
    input: ""
  },
];

function Actions() {
  return (
    <section className="App-header">
      <Container id="projects-area">
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Take Actions </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 projectItemsBrowse">
          {ActionItems.map((data, i) => {
            return (
              <div key={i} className="projectItem">
                <p>{data.platform}</p>
                <div className="content">
                  <p>{data.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Actions;
