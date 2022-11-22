import "./Post.css";
import React from "react";

export const Post = (props) => {
  return (
    <div class="post">
      <div className="top-post">
        <h1 className="post-heading">{props.postName}</h1>
        <p className="post-paragraph">
          {props.postText}
        </p>
      </div>
      <hr className="mid-hr"></hr>
      <div className="profile-info">
        <div className="user">
          <h3>{props.postAuthor}</h3>
          <p>{props.userPosition}</p>
        </div>
        <p className="date">{props.dateAdded}</p>
      </div>
    </div>
  );
};
