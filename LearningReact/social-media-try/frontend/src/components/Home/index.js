import React, { useState, useEffect, useReducer } from "react";
import HomeIcon from "@material-ui/icons/Home";
import MessageIcon from "@material-ui/icons/Message";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupsIcon from "@material-ui/icons/Group";
import SendIcon from "@material-ui/icons/Send";
import Button from "@material-ui/core/Button";
import "./homePage.css";
import { Modal } from "./modal";

import { reducer } from "./reducer";

const defaultState = {
  isModalOpen: false,
  isModalStatus: false,
  modalContent: "",
};

export const HomePage = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  return (
    <section className="homePage">
      <SidebarLeftNav />
      <MiddleContainer state={state} dispatch={dispatch} />
      {state.isModalOpen && <Modal state={state} dispatch={dispatch} />}
      <SidebarRightNav />
    </section>
  );
};

const SidebarLeftNav = () => {
  return (
    <div className="sideBarLeftNavContainer">
      <span className="search">
        <SearchIcon style={{ color: "#fff" }} />
        <input type="text" placeholder="search" className="searchContainer" />
      </span>

      <ul>
        <li>
          <span className="iconLinkContainer">
            <HomeIcon style={{ marginRight: "10px" }} />
            Home
          </span>
        </li>
        <li>
          <span className="iconLinkContainer">
            <MessageIcon style={{ marginRight: "10px" }} />
            Messages
          </span>
        </li>
        <li>
          <span className="iconLinkContainer">
            <WhatshotIcon style={{ marginRight: "10px" }} />
            Trends
          </span>
        </li>
      </ul>
      <span className="userContainer">Username</span>
    </div>
  );
};

const MiddleContainer = ({ state, dispatch }) => {
  return (
    <div className="middleContainer">
      <nav className="middleNav">
        <h3>Home</h3>
        <span className="navIconContainer">
          <SendIcon
            style={{ marginLeft: "20px" }}
            onClick={() => dispatch({ type: "sendStatus" })}
          />
          <SettingsIcon style={{ marginLeft: "20px" }} />
          <GroupsIcon style={{ marginLeft: "20px" }} />
        </span>
      </nav>
      <StatusContainer />
    </div>
  );
};

const testArr = [
  {
    content: "sopa",
  },
  {
    content: "puta",
  },
  {
    content: "de caracol",
  },
  {
    content: "sopa",
  },
  {
    content: "puta",
  },
  {
    content: "de caracol",
  },
  {
    content: "sopa",
  },
  {
    content: "puta",
  },
  {
    content: "de caracol",
  },
];

const StatusContainer = () => {
  const [data, setData] = useState(testArr);
  return (
    <div className="statusContainer">
      {data.map((status, index) => {
        return (
          <>
            <div className="statusTextContainer">
              <img
                src="https://pbs.twimg.com/media/E9sN5jzVUAUgYHn.png"
                alt=""
              />
              <h2>Username</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis est voluptatem hic, vel dicta amet quaerat omnis ullam
                velit aut. Aperiam nulla nobis atque fugiat enim itaque
                deleniti, saepe tempore sint repudiandae delectus reiciendis
                eius id. Voluptatibus, placeat animi modi aliquid perferendis
                quaerat, inventore ad ab possimus iure error sint!
              </p>
            </div>
          </>
        );
      })}
    </div>
  );
};

const SidebarRightNav = () => {
  return (
    <div className="sideBarRightNavContainer">
      <span className="homeIcon">
        <HomeIcon fontSize="large" style={{ color: "white" }} />
      </span>
      <div className="storiesContainer"></div>
    </div>
  );
};
