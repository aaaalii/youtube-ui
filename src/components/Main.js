import { useEffect, useState } from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Sidebar from "./Sidebar";
import { Video } from "../Video";

export default function Main() {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log("🚀 ~ Main ~ activeIndex:", activeIndex)

  const videoList = [
    {
      title: "Big Buck Bunny",
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
      views: 100,
      timestamp: "1 day ago",
      thumbnail: 'https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.webp?s=1024x1024&w=is&k=20&c=ZRzdKZTGsNQqzQ4HpvVsrWT1BL9NjKmB76pIteut-xs=',
      channelName: "Channel Name",
    },
    {
      title: "Big Buck Bunny 02",
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      views: '1M',
      timestamp: "1 decade ago",
      thumbnail: 'https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.webp?s=1024x1024&w=is&k=20&c=ZRzdKZTGsNQqzQ4HpvVsrWT1BL9NjKmB76pIteut-xs=',
      channelName: "Channel Name",
    },
    {
      title: "Big Buck Bunny 03",
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      views: 10000,
      timestamp: "1 day ago",
      thumbnail: 'https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.webp?s=1024x1024&w=is&k=20&c=ZRzdKZTGsNQqzQ4HpvVsrWT1BL9NjKmB76pIteut-xs=',
      channelName: "Channel Name",
    },
    {
      title: "Big Buck Bunny 04",
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      views: 1,
      timestamp: "1 day ago",
      thumbnail: 'https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.webp?s=1024x1024&w=is&k=20&c=ZRzdKZTGsNQqzQ4HpvVsrWT1BL9NjKmB76pIteut-xs=',
      channelName: "Channel Name",
    },
    {
      title: "Big Buck Bunny 05",
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      views: '100B',
      timestamp: "1 sec ago",
      thumbnail: 'https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.webp?s=1024x1024&w=is&k=20&c=ZRzdKZTGsNQqzQ4HpvVsrWT1BL9NjKmB76pIteut-xs=',
      channelName: "Channel Name",
    },
  ];

  const [vedioes, setVideos] = useState(videoList);
  const [video, setVideo] = useState(videoList[0]);
  useEffect(() => {

  }, [video]);
  return (
    <>
      <div className="ps-5 pe-5 mt-6 text-light main">
        <Sidebar />
        <LeftSection video={video}/>
        <RightSection setVideo={setVideo} videoList={vedioes} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
      </div>
    </>
  );
}
