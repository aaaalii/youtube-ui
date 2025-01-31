import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

export default function Main() {
  return (
    <>
      <div className="ps-5 pe-5 pt-6 bg-dark text-light overflow-auto main d-flex justify-content-center">
        <LeftSection/>
        <RightSection/>
      </div>
    </>
  );
}