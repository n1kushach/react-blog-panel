import "./SidebarModalUpdate.css";
import React from "react";

export const SidebarModalUpdate = ({
  toggleSideBarModal,
  setToggleSideBarModal,
  dropdownValue,
  setDropdownValue,
  sideBarModalString,
  setSideBarModalString,
  data,
  id
}) => {

  const updateData = (id, thingToChange) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        item[thingToChange] = sideBarModalString;
      }
      return item;
    });
    setToggleSideBarModal(!toggleSideBarModal)
    return newData;
  }
  return (
    <div className="sidebar-modal-update">
      Sidebar Modal Update
      <select onChange={(e) => {
        setDropdownValue(e.target.value)
        console.log(e.target.value)
      }}>
        <option value="chooseValue">Choose thing to update</option>
        <option value="postName">Post name</option>
        <option value="postText">Post text</option>
        <option value="postAuthor">Post author</option>
        <option value="userPosition">User position</option>
      </select>
      <input onChange={(e) => {
        setSideBarModalString(e.target.value)
        console.log(e.target.value)
      }} type="text" placeholder="string..."></input>
      <button onClick={() => setToggleSideBarModal(!toggleSideBarModal)}>
        Back
      </button>
      <button onClick={() => updateData(id, dropdownValue)}>Update</button>
    </div>
  );
};

export default SidebarModalUpdate;
