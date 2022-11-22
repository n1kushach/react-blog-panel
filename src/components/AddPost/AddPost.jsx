import "./AddPost.css";
import React from "react";

export const AddPost = ({ openModal, setOpenModal, setAddPostDisplay, addPostDisplay }) => {
  return (
    <div style={{display: addPostDisplay === false ? "flex" : "none"}} className="add-post">
      <h1 className="add-post-heading">
        If you want to add post to the blog, please click the "Add Post" button.
      </h1>
      <button
        onClick={() => {
          setOpenModal(!openModal);
          }}
        className="add-post-button"
      >
        Add Post
      </button>
    </div>
  );
};
