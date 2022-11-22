import React from "react";
import "./Modal.css";
import { useState } from "react";

export const Modal = ({ setOpenModal, setData, data, addPostDisplay, setAddPostDisplay }) => {
  const [postName, setPostName] = useState("");
  const [postText, setPostText] = useState("");
  const [author, setPostAuthor] = useState("");
  const [userPosition, setUserPosition] = useState("");

  const handleSubmit = () => {
    const newPost = {
      postName: postName,
      postText: postText,
      postAuthor: author,
      userPosition: userPosition,
      dateAdded: new Date().toLocaleTimeString(),
      id: data.length === 0 ? 1 : data[data.length - 1].id + 1,
    };
    if (
      postName !== "" &&
      postText !== "" &&
      author !== "" &&
      userPosition !== ""
    ) {
      setData([...data, newPost]);
      setOpenModal(false);
      setAddPostDisplay(false);
      console.log(data);
    }
  };

  return (
    <div className="overlay">
      <div className="modalContainer">
        <div className="blog-post-input-heading">
          <h1 className="modal-heading">Post name</h1>
          <input
            onChange={(e) => setPostName(e.target.value)}
            placeholder="Blog post name"
          ></input>
        </div>
        <div className="blog-post-input-paragraph">
          <h1 className="modal-heading">Blog post text</h1>
          <input
            onChange={(e) => setPostText(e.target.value)}
            placeholder="Blog post text"
          ></input>
        </div>
        <div className="blog-post-input-username">
          <h1 className="modal-heading">Author</h1>
          <input
            onChange={(e) => setPostAuthor(e.target.value)}
            placeholder="Blog post author"
          ></input>
        </div>
        <div className="blog-post-input-position">
          <h1 className="modal-heading">Position</h1>
          <input
            onChange={(e) => setUserPosition(e.target.value)}
            placeholder="Blog post author position"
          ></input>
        </div>
        <div className="buttons">
          <button
            className="modal-button close"
            onClick={() => {
              setOpenModal(false)
              setAddPostDisplay(false)
            }}
          >
            Close
          </button>
          <button
            onClick={() => handleSubmit()}
            className="modal-button submit"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
