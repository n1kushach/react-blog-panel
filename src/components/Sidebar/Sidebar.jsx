import "./Sidebar.css";
import React from "react";
import { useState } from "react";

export const Sidebar = ({ data, setData, setOpenSideBarModal, id, setId, setAddPostDisplay, addPostDisplay }) => {

  const handleDeleteSidebar = (id) => {
    setData(data.filter((item) => item.id !== id));
  }

  return (
    <div className="side-bar">
      {data.map((item) => {
        return (
          <div>
            <button
              id={item.id}
              onClick={() => {
                setOpenSideBarModal(true);
                setId(item.id);
                setAddPostDisplay(true);
              }}
              className="side-bar-item"
            >
              {item.postName}
            </button> 
            <button onClick={() => handleDeleteSidebar(item.id)} className="delete-sidebar-item">X</button>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
