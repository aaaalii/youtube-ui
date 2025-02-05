export default function VideoCard({
  video,
  setVideo,
  setActiveIndex,
  index
}) {

  return (
    <>
      <div
        className="videoCard p-2 d-flex fs-sm fw-bold"
        onClick={() => {
          setVideo(video);
          setActiveIndex(index);
        }}
        style={{ cursor: "pointer" }}
      >
        <div className="videoCard__video">
          <img
            src={video['thumbnail']}
            alt="video"
            width="100%"
            height="100%"
            className="rounded-10"
          />
        </div>
        <div className="videoCard__info ms-2 overflow-hidden">
          <p className="mb-0 videoCard__info_title">{video['title']}</p>
          <p className="mb-0">{video['channelName']}</p>
          <p className="mb-0">{`${video['views']} views . ${video['timestamp']}`}</p>
        </div>
      </div>
    </>
  );
}
