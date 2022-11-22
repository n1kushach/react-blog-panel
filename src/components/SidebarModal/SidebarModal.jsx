import React from "react";
import "./SidebarModal.css";
import { SidebarModalUpdate } from "../SidebarModalUpdate/SidebarModalUpdate";

export const SidebarModal = ({
  setOpenSideBarModal,
  data,
  id,
  setAddPostDisplay,
  addPostDisplay,
  toggleSideBarModal,
  setToggleSideBarModal,
  dropdownValue,
  setDropdownValue,
  sideBarModalString,
  setSideBarModalString
}) => {
  return (
    <div className="sidebarOverlay">
      <div className="sidebarModalContainer">
        {toggleSideBarModal && <SidebarModalUpdate id={id} data={data} sideBarModalString={sideBarModalString} setSideBarModalString={setSideBarModalString} dropdownValue={dropdownValue} setDropdownValue={setDropdownValue} toggleSideBarModal={toggleSideBarModal} setToggleSideBarModal={setToggleSideBarModal}/>}
        <div style={{display: toggleSideBarModal === true ? "none" : "flex"}} className="sidebarModal">
          {data
            .filter((item) => item.id === id)
            .map((item) => {
              return (
                <div className="sidebar-modal-container">
                  <h1 className="sidebar-modal-heading">
                    Post title - {item.postName}
                  </h1>
                  <p className="sidebar-modal-p">
                    Post description - {item.postText}
                  </p>
                  <p className="sidebar-modal-p">
                    Post author - {item.postAuthor}
                  </p>
                  <p className="sidebar-modal-p">Post id {id}</p>
                  <p className="sidebar-modal-p">Date added {item.dateAdded}</p>
                  <button
                  className="sidebar-modal-close"
                    onClick={() => {
                      setOpenSideBarModal(false);
                      setAddPostDisplay(false);
                    }}
                  >
                    X
                  </button>
                  <button onClick={() => setToggleSideBarModal(true)} className="sidebar-modal-update">
                    Update post
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SidebarModal;
