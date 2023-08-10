"use client";

import { Comment } from "@/components/Comment";
import { PostOwner } from "@/components/PostOwner";
import { Reply } from "@/components/Reply";
import { comments } from "@/libs/comments";

export default function HomePage() {
  
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner By use components*/}
        {/* Post Owner Complete */}
        <PostOwner 
          userImgPath={"/profileImages/img01.jpg"} //my profile
          username={"Punnawich Dach-in 650610787"} //my username 
          postText={"Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"}
          likeNum={100}
        />
        
        {/* map-loop render Comment component here */}
        
        {comments.map((user) => ( //show comment by mapping
          <Comment
            key={user.username} 
            userImagePath={user.userImagePath}
            username={user.username}
            commentText={user.commentText}
            likeNum={user.likeNum}
            replies={user.replies}
          />
        ))}

      </div>
    </div>
  );
}
