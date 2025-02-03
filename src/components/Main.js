import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

export default function Main() {
  return (
    <>
      <div className="ps-5 pe-5 mt-6 text-light overflow-auto main">
        <LeftSection/>
        <RightSection/>
      </div>
    </>
  );
}