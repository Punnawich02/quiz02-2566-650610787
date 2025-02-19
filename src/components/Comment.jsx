// make comment component completed
"use client";
import { Reply } from "./Reply";

export const Comment = ({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}) => {
  return (
    <div>
      {/* map-loop render Reply component here */}
      <div className="d-flex gap-2 my-2">
          <img
            src={userImagePath}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#3A3B3C" }}
          >
            <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
              {username}
            </span>
            <br />
            <span style={{ color: "#E4E6EB" }}>{commentText}</span>
            <div className="d-flex align-items-center gap-1">
              {/* Like condition */}
              {likeNum>0 ? <img src="/like.svg" width={20}></img> : ""} 
              {likeNum>0 ? <span style={{ color: "#B0B3B8" }}>{likeNum} คน</span> : ""}
            </div>
          </div>
        </div>
        
        {/* Show reply by mapping */}
        {replies.map((user) => (
          <Reply
            key={user.username}
            userImagePath={user.userImagePath}
            username={user.username}
            replyText={user.replyText}
            likeNum={user.likeNum}/>
        ))}
    
    </div>
  );
};
