import { Stack } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faMicrophone, faPlus, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Header() {

  function openSidebar(){
    let sidebar = document.getElementById('sidebar');
    if(sidebar.style.width === '250px'){
      sidebar.style.width = '0';
    } else {
      sidebar.style.width = '240px';
      // document.body.style.backgroundColor = "rgba(0, 0, 0, 0.88)";
    }
  }
  return (
    <Stack direction="horizontal" gap={3} className="header text-light px-4 position-fixed d-flex justify-content-between align-items-center app-bg z-1">
      <div onClick={openSidebar} style={{cursor: 'pointer'}}>
        <FontAwesomeIcon icon={faBars}/>
      </div>
      <a href="/">
        <img src="youtube-logo.svg" alt="home" className="" width='110px' height='50px'/>
      </a>
      <div className="ms-auto">
        <div className="d-flex">
          <div id="search" className="youtube-border rounded-40 overflow-hidden ps-2 d-flex" style={{  backgroundColor: 'hsl(0, 0%, 13.73%)'}}>
            <input type="text" className="text-light search-bar" placeholder="Search" style={{  backgroundColor: 'hsl(0, 0%, 13.73%)'}}/>
            <div className="icon p-1 ps-3 pe-3 display-flex align-items-center header__searchIcon pb-1">
              <FontAwesomeIcon icon={faSearch}/>
            </div>
          </div>
          <div id="mic" className="rounded-circle ms-2 icon p-2 d-flex align-items-center">
            <FontAwesomeIcon icon={faMicrophone} className="px-1"/>
          </div>
        </div>
      </div>
      <div className="ms-auto rounded-40 icon">
        <button className="btn text-light d-flex justify-content-center align-items-center">{<FontAwesomeIcon icon={faPlus}/>} {<div className="header__createText ms-2 fs-sm fw-bold">Create</div>}</button>
      </div>
        <div style={{height: '16px'}}>
            <FontAwesomeIcon icon={faBell}/>
            <div className="header__notification--position">
              9+
            </div>
        </div>
      <FontAwesomeIcon icon={faUser}/>
    </Stack>
  );
}
