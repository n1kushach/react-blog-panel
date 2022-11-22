import React from "react";
import { AddPost } from "../AddPost/AddPost";
import { Header } from "../Header/Header";
import { Post } from "../Post/Post";
import { Modal } from "../Modal/Modal";
import { Sidebar } from "../Sidebar/Sidebar";
import { SidebarModal } from "../SidebarModal/SidebarModal";
import { useState } from "react";
import "./Main.css";

export const Main = ({ props }) => {
  const [id, setId] = useState(0);

  return (
    <div className="main">
      <Header />
      {props.data.length === 0 ? null : (
        <Sidebar
          id={id}
          setId={setId}
          setOpenSideBarModal={props.setOpenSideBarModal}
          openSideBarModal={props.openSideBarModal}
          data={props.data}
          setData={props.setData}
          setAddPostDisplay={props.setAddPostDisplay}
          addPostDisplay={props.addPostDisplay}
        />
      )}
      {props.openSideBarModal === true ? (
        <SidebarModal
          sideBarModalString={props.sideBarModalString}
          setSideBarModalString={props.setSideBarModalString}
          dropdownValue={props.dropdownValue}
          setDropdownValue={props.setDropdownValue}
          toggleSideBarModal={props.toggleSideBarModal}
          setToggleSideBarModal={props.setToggleSideBarModal}
          id={id}
          data={props.data}
          setOpenSideBarModal={props.setOpenSideBarModal}
          openSideBarModal={props.openSideBarModal}
          setAddPostDisplay={props.setAddPostDisplay}
          addPostDisplay={props.addPostDisplay}
        />
      ) : null}
      <AddPost
        addPostDisplay={props.addPostDisplay}
        setAddPostDisplay={props.setAddPostDisplay}
        openModal={props.openModal}
        setOpenModal={props.setOpenModal}
      />
      <div className="main-posts">
        {props.data?.map((item) => {
          return (
            <Post
              postName={item.postName}
              postText={item.postText}
              postAuthor={item.postAuthor}
              userPosition={item.userPosition}
              dateAdded={item.dateAdded}
            />
          );
        })}
      </div>
      {props.openModal === true ? (
        <Modal
          addPostDisplay={props.addPostDisplay}
          setAddPostDisplay={props.setAddPostDisplay}
          data={props.data}
          setData={props.setData}
          setOpenModal={props.setOpenModal}
        />
      ) : null}
    </div>
  );
};
