import Icon from "./Icon";

export default function ChannelCard({img, name, subs}) {
  return (
    <>
      <div className="d-flex p-1 align-items-center ">
        <Icon icon={img}/>
        <div className="d-flex flex-column ms-2">
          <p className="pb-0 mb-0 fs-sm fw-bold">{name}</p>
          <p className="pb-0 mb-0 fs-sm">{subs} subscribers</p>
        </div>
        <button className="btn btn-light ms-5 rounded-40">Subscribe</button>
      </div>
    </>
  );
}