import { Stack } from "react-bootstrap";

export default function Header() {
  return (
    <Stack direction="horizontal" gap={3} className="bg-dark text-light ps-4 pe-4 pt-1 pb-2 position-fixed w-100 d-flex justify-content-between align-items-center">
      <div className="p-2">
        <img src="https://img.icons8.com/ios-glyphs/30/ffffff/menu.png" alt="menu" className=""/>
      </div>
      <div className="">
        <img src="https://img.icons8.com/ios-glyphs/30/ffffff/youtube.png" alt="home" className=""/>
      </div>
      <div className="ms-auto">
        <div className="d-flex">
          <div id="search" className="youtube-border rounded-40 overflow-hidden ps-2 d-flex align-items-center">
            <input type="text" className="bg-dark text-light search-bar" placeholder="Search"/>
            <div className="icon p-1 pe-2 display-flex align-items-center header__searchIcon pb-1">
              <img src="https://img.icons8.com/ios-glyphs/30/ffffff/search--v1.png" alt="search" height='20px' className="pb-1"/>
            </div>
          </div>
          <div id="mic" className="rounded-circle ms-2 icon p-2 d-flex align-items-center">
            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/microphone.png" alt="mic" width='20px' height='18px'/>
          </div>
        </div>
      </div>
      <div className="ms-auto rounded-40 icon">
        <button className="btn text-light"> + Create</button>
      </div>
      <img src="https://img.icons8.com/ios-glyphs/30/ffffff/bell.png" alt="bell" className=""/>
     <img src="https://img.icons8.com/ios-glyphs/30/ffffff/user.png" alt="user" className=""/>
    </Stack>
  );
}
