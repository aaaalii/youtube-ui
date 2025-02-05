import { useEffect, useRef } from "react";

export default function VideoPlayer({ video, title }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = video;
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [video]);

  return (
    <>
      <div className="video-container">
        <video
          controls
          className="w-100 h-100 rounded-10"
          id="videoPlayer"
          ref={videoRef}
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <p className="mt-1 fw-bold">{title}</p>
    </>
  );
}
