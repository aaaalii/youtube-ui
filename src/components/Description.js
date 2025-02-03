import { Accordion, Card } from "react-bootstrap";
import Toogle from "./Toogle";

export default function Description({views, date, description}) {
  return (
    <>
      <div className="left-section__description p-2 pt-0">
        <div className="d-flex pt-2 fw-bold">
          <p className="fs-sm text-light">{views} views</p>
          <p className="fs-sm text-light ms-2">{date}</p>
        </div>
        <Accordion defaultActiveKey="0">
          <Toogle eventKey="0">Show more</Toogle>
          <Accordion.Collapse eventKey="0">
            <div className="fs-sm">
              {description}
            </div>
          </Accordion.Collapse>
        </Accordion>
      </div>
    </>
  );
}