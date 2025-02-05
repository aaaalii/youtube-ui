import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navitem({icon, text, active = false}) {
  return (
    <>
      <div className=''>
        {
          active ? <div className="active-bar">
          </div> : null
        }
        <a href="/" className=''>
          <div className='d-flex'>
            <FontAwesomeIcon icon={icon} className='ms-4 me-4'/>
            <p>{text}</p>
          </div>
        </a>
      </div>
    </>
  );
}