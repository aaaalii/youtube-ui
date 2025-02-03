export default function VideoCard(){
  return (
    <>
      <div className="videoCard p-2 d-flex fs-sm fw-bold">
        <div className="videoCard__video"></div>
        <div className="videoCard__info ms-2 overflow-hidden">
          <p className="mb-0 videoCard__info_title">Title hhhhhhhhhhhhhhhh | ghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
          <p className="mb-0">Channel Name</p>
          <p className="mb-0">Views • Timestamp</p>
        </div>
      </div>
    </>
  );
}