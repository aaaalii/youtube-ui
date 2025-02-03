import Comment from "./Comment";

export default function CommentSection({totalComments}) {
  return (
    <>
      <div className="d-flex">
        <div className="fw-bold fs-lg">
          {totalComments} Comments
        </div>
        <div className="ms-5 fs-sm fw-bold pt-1">
          Sort by
        </div>
      </div>
        <div className="d-flex mt-3">
          <img src="logo512.png" alt="" className="rounded-circle" width='40'/>
          <input type="text" className="ms-3 app-bg text-white comment-section__input" placeholder="Add a comment..."/>
        </div>
      <div style={{maxWidth: "100%"}}>
        <Comment img="logo512.png" name="ali" comment="Comment" time="9 months"/>
        <Comment img="logo512.png" name="ali" comment="Comment" time="9 months"/>
        <Comment img="logo512.png" name="ali" comment="Comment" time="9 months"/>
        <Comment img="logo512.png" name="ali" comment="Comment" time="9 months"/>
        <Comment img="logo512.png" name="ali" comment="Comment" time="9 months"/>
        <Comment img="logo512.png" name="ali" comment="Comment" time="9 months"/>
        <Comment img="logo512.png" name="ali" comment="Comment" time="9 months"/>
        <Comment img="logo512.png" name="ali" comment="Comment fsdfffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
        LLLLLLLLM" time="9 months"/>
        <Comment img="logo512.png" name="ali" comment="Comment" time="9 months"/>
        <Comment img="logo512.png" name="ali" comment="Comment" time="9 months"/>
        <Comment img="logo512.png" name="ali" comment="Comment" time="9 months"/>
        <Comment img="logo512.png" name="ali" comment="Comment" time="9 months"/>
        <Comment img="logo512.png" name="ali" comment="Comment" time="9 months"/>
      </div>
    </>
  );
}