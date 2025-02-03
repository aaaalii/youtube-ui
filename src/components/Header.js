import { Stack } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faMicrophone, faPlus, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <Stack direction="horizontal" gap={3} className=" text-light ps-4 pe-4 position-fixed w-100 d-flex justify-content-between align-items-center header-bg">
      <FontAwesomeIcon icon={faBars}/>
      <div className="">
        <img src="youtube-logo.svg" alt="home" className="" width='110px'/>
      </div>
      <div className="ms-auto">
        <div className="d-flex">
          <div id="search" className="youtube-border rounded-40 overflow-hidden ps-2 d-flex align-items-center" style={{  backgroundColor: 'hsl(0, 0%, 13.73%)'}}>
            <input type="text" className="text-light search-bar" placeholder="Search" style={{  backgroundColor: 'hsl(0, 0%, 13.73%)'}}/>
            <div className="icon p-1 pe-2 display-flex align-items-center header__searchIcon pb-1">
              <FontAwesomeIcon icon={faSearch}/>
            </div>
          </div>
          <div id="mic" className="rounded-circle ms-2 icon p-2 d-flex align-items-center">
            <FontAwesomeIcon icon={faMicrophone} className="px-1"/>
          </div>
        </div>
      </div>
      <div className="ms-auto rounded-40 icon">
        <button className="btn text-light d-flex justify-content-center align-items-center">{<FontAwesomeIcon icon={faPlus}/>} {<div className="header__createText ms-1">Create</div>}</button>
      </div>
        <FontAwesomeIcon icon={faBell}/>
      <FontAwesomeIcon icon={faUser}/>
    </Stack>
  );
}
