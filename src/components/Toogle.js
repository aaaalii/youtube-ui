import { useAccordionButton } from "react-bootstrap";

export default function Toogle({eventKey, children}) {
  return (
    <>
      <p
        onClick={useAccordionButton(eventKey)}
        className="fs-sm pb-0 mb-0"
      >
        {children}
      </p>
    </>
  );
}