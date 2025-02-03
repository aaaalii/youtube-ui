export default function ReactionButton({icon}) {
  return(
    <>
      <div className="icon left-section__button rounded-40 p-3 ms-2 reaction-button d-flex align-items-center justify-content-center">
        {icon}
      </div>
    </>
  );
}