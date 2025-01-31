import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";

export default function App() {
  return (
    <>
      <div className="d-flex flex-column">
        <Header />
        <Main/>
      </div>
    </>
  );
}
