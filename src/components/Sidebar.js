import { faBars, faHome, faL } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navitem from "./Navitem";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Sidebar({state, setState}){ 

  const [activeIndex, setActiveIndex] = useState(0);
  function closeSidebar(){
    setState(false);
  }

  return (
    <>
      <div id="sidebar" className={`sidebar z-1 h-100 position-fixed app-bg text-light ${state  ? 'sidebar--open' : 'sidebar--closed'}`}>
        <div className="sidebar__header d-flex align-items-center p-4 pt-0">
          <div onClick={closeSidebar} style={{cursor: 'pointer'}}>
            <FontAwesomeIcon icon={faBars}/>
          </div>
          <a href="/">
            <img src="youtube-logo.svg" alt="home" className="sidebar__logo ms-4" width='110px' height='50px'/>
          </a>
        </div>
        <div className="sidebar-items">
          <Link to="/" onClick={closeSidebar}>
            <Navitem icon={faHome} text="Home" active={true}/>
          </Link>
          <Link to="/video" onClick={closeSidebar}>
            <Navitem icon={faHome} text="Shorts" active={true}/>
          </Link>
          <Navitem icon={faHome} text="Subscriptions" active={true}/>
          <div className="px-3">
            <hr className="hr"/>
          </div>
          <p className="fw-bold fs-lg ms-3">You &gt;</p>
          <Navitem icon={faHome} text="Home" active={true}/>
          <Navitem icon={faHome} text="Shorts" active={true}/>
          <Navitem icon={faHome} text="Subscriptions" active={true}/>
          <Navitem icon={faHome} text="Home" active={true}/>
          <Navitem icon={faHome} text="Shorts" active={true}/>
          <Navitem icon={faHome} text="Subscriptions" active={true}/>
          <Navitem icon={faHome} text="Home" active={true}/>
          <Navitem icon={faHome} text="Shorts" active={true}/>
          <Navitem icon={faHome} text="Subscriptions" active={true}/>
          <Navitem icon={faHome} text="Home" active={true}/>
          <Navitem icon={faHome} text="Shorts" active={true}/>
          <Navitem icon={faHome} text="Subscriptions" active={true}/>
          <Navitem icon={faHome} text="Home" active={true}/>
          <Navitem icon={faHome} text="Shorts" active={true}/>
          <Navitem icon={faHome} text="Subscriptions" active={true}/>
          <Navitem icon={faHome} text="Home" active={true}/>
          <Navitem icon={faHome} text="Shorts" active={true}/>
          <Navitem icon={faHome} text="Subscriptions" active={true}/>
        </div>
      </div>
    </>
  );
}