export default function ReactionButton({icon}) {
  return(
    <>
      <div className="icon rounded-40 p-2 ms-2 reaction-button d-flex align-items-center justify-content-center">
        {icon}
      </div>
    </>
  );
}