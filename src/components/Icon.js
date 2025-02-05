export default function Icon({icon}) {
  return(
    <>
      <div className="rounded-40 overflow-hidden">
        <img alt="" src={icon} width='34px' height='34px' className=""/>
      </div>
    </>
  );
}