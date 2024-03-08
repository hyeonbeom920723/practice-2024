import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "HB",
    comment: "Comment 1",
  },
  {
    name: "YB",
    comment: "Comment 2",
  },
  {
    name: "MO",
    comment: "Comment 3",
  },
];

const CommentList = (props) => {
  return (
    <div>
      {comments.map((comment) => (
        <Comment name={comment.name} comment={comment.comment} />
      ))}
    </div>
  );
};

export default CommentList;
