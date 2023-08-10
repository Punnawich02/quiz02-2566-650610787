// Make Post Owner to component completed
"use client";
export const PostOwner = ({
  userImgPath,
  username,
  postText,
  likeNum
}) => {
  return (
    <div className="vstack gap-3">
    <div className="d-flex align-items-center gap-3">
      <img
        src={userImgPath}
        width="48"
        height="48"
        className="rounded-circle"
        style={{ objectFit: "cover" }}
      />
      <span className="fw-semibold fs-5 text-white">
        {username}
      </span>
    </div>

    <span className="text-white">
      {postText}
    </span>

    <div className="d-flex align-items-center gap-1">
      
      {/* Like condition */}
      {likeNum>0 ? <img src="/like.svg" width={20}></img> : ""}
      {likeNum>0 ? <span style={{ color: "#B0B3B8" }}>{likeNum} คน</span> : ""}
    </div>
    <hr className="m-0 border" />
  </div>
  
)};
