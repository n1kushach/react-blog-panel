import "./App.css";
import "./reset.css";
import { Main } from "./components/Main/Main";
import { Post } from "./components/Post/Post";
import { useState } from "react";

function App() {

  const [openModal, setOpenModal] = useState(false);
  const [openSideBarModal, setOpenSideBarModal] = useState(false);
  const [data, setData] = useState([]);
  // True means making AddPost display: none
  const [addPostDisplay, setAddPostDisplay] = useState(false);
  const [toggleSideBarModal, setToggleSideBarModal] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("");
  const [sideBarModalString, setSideBarModalString] = useState("");
  // True means making posts display: none
  const [togglePosts, setTogglePosts] = useState(false);


  return (
    <div className="App">
      <Main props={{
        togglePosts,
        setTogglePosts,
        openModal,
        setOpenModal,
        data,
        setData,
        openSideBarModal,
        setOpenSideBarModal,
        addPostDisplay,
        setAddPostDisplay,
        toggleSideBarModal,
        setToggleSideBarModal,
        dropdownValue,
        setDropdownValue,
        sideBarModalString,
        setSideBarModalString
      }} />
    </div>
  );
}

export default App;
