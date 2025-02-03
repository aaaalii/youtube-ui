export default function Comment({img, name, comment, time}) {
  return (
    <>
      <div className="d-flex pt-3">
        <div>
          <img src={img} alt="" className="rounded-circle" width="40"/>
        </div>
        <div className="ms-3">
          <div className="d-flex">
            <span className="fs-sm fw-bold">@{name}</span>
            <span className="fs-sm ms-2">{time} ago</span>
          </div>
          <div className="fs-sm comment__message">{comment}</div>
        </div>
      </div>
    </>
  );
}