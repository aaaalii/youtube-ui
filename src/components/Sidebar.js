import { faBars, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navitem from "./Navitem";

export default function Sidebar() {
  function closeSidebar(){
    let sidebar = document.getElementById('sidebar');
    sidebar.style.width = '0';
  }
  return (
    <>
      <div id="sidebar" className="sidebar z-1 h-100 position-fixed app-bg text-light">
        <div className="sidebar__header d-flex align-items-center p-4 pt-0">
          <div onClick={closeSidebar} style={{cursor: 'pointer'}}>
            <FontAwesomeIcon icon={faBars}/>
          </div>
          <a href="/">
            <img src="youtube-logo.svg" alt="home" className="sidebar__logo ms-4" width='110px' height='50px'/>
          </a>
        </div>
        <div className="sidebar-items">
          <Navitem icon={faHome} text="Home" active={true}/>
          <Navitem icon={faHome} text="Shorts" active={true}/>
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