import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="d-flex flex-column">
        <BrowserRouter>
          <div className="d-flex flex-column">
            <Header setSidebarOpen={setSidebarOpen}/>
            <Sidebar state={isSidebarOpen} setState={setSidebarOpen}/>
            <Routes>
              <Route
                path="/"
                exact
                element={<Home />}
              />
              <Route
                path="/video"
                exact
                element={<Main />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}
