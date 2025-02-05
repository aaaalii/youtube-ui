import VideoCard from "./VideoCard";

export default function RightSection({ setVideo, videoList, activeIndex, setActiveIndex }) {
  return (
    <div className="ms-3 right-section overflow-auto">
      {videoList.map((video, index) => (
        <div key={index} className={activeIndex === index ? "active" : ""}>
          <VideoCard video={video} setVideo={setVideo} setActiveIndex={setActiveIndex} index={index}/>
        </div>
      ))}
    </div>
  );
}
