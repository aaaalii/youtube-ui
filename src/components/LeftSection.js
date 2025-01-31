import ChannelCard from "./ChannelCard";
import ReactionButton from "./ReactionButton";
import VideoPlayer from "./VideoPlayer";

export default function LeftSection() {
  return (
    <>
      <div className="left-section overflow-none">
        <VideoPlayer/>
        <div className="d-flex justify-content-between">
          <ChannelCard img='logo512.png' name='Atif Aslam' subs='1.1 M'/>
          <div className="d-flex">
            <ReactionButton icon='Like | Dislike'/>
            <ReactionButton icon='Share'/>
            <ReactionButton icon='Download'/>
            <ReactionButton icon='...'/>
          </div>
        </div>
    </div>
    </>
  );
}