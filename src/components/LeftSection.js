import ChannelCard from "./ChannelCard";
import CommentSection from "./CommentSection";
import Description from "./Description";
import ReactionButton from "./ReactionButton";
import VideoPlayer from "./VideoPlayer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown, faShare, faDownload, faEllipsisH } from "@fortawesome/free-solid-svg-icons";

export default function LeftSection() {
  return (
    <>
      <div className="left-section overflow-none">
        <VideoPlayer/>
        <div className="d-flex justify-content-between left-section__videoDetails">
          <ChannelCard img='logo512.png' name='Atif Aslam' subs='1.1 M'/>
          <div className="d-flex left-section--mobile-view">
            <ReactionButton icon={<><FontAwesomeIcon className="me-2" icon={faThumbsUp}/> 9.8M | <FontAwesomeIcon className="ms-2" icon={faThumbsDown}/></>}/>
            <ReactionButton icon={<><FontAwesomeIcon icon={faShare} className="me-2"/> Share</>}/>
            <div className="download-button">
              <ReactionButton icon= {<><FontAwesomeIcon icon={faDownload} className="me-2"/> Download</>}/>
            </div>
            <ReactionButton icon={<FontAwesomeIcon icon={faEllipsisH}/>}/>
          </div>
        </div>
        <div className="mt-4">
          <Description views='1.1 M' date='1 year ago' description='Atif Aslam is a Pakistani playback singer and actor. He has recorded numerous chart-topping songs and is known for his vocal belting technique. He predominantly sings in Urdu and Hindi, but has also sung in Punjabi, Bengali and Pashto. He is a recipient of numerous Lux Style Awards, he also received Tamgha-e-Imtiaz in 2008, the fourth-highest decoration given to civilians in Pakistan.'/>
        </div>
        <div className="mt-3">
          <CommentSection totalComments='20000'/>
        </div>
    </div>
    </>
  );
}