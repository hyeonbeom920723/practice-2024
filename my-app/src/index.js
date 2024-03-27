import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Clock from "./chapter_04/Clock";
import CommentList from "./chapter_05/CommentList";
import NotificationList from "./chapter_06/NotificationList";
import Accomodate from "./chapter_07/Accomodate";
import ConfirmButton from "./chapter_08/ConfirmButton";
import ConfirmButtonClassField from "./chapter_08/ConfirmButtonClassField";
import ConfirmButtonFunction from "./chapter_08/ConfirmButtonFunction";
import LandingPage from "./chapter_09/LandingPage";
import AttendanceBook from "./chapter_10/AttendanceBook";
import Signup from "./chapter_11/Signup";
import Calculator from "./chapter_12/Calculator";
import Profilecard from "./chapter_13/ProfileCard";
import DarkOrLight from "./chapter_14/DarkOrLight";
import Blocks from "./chapter_15/Blocks";

ReactDOM.render(
  <React.StrictMode>
    <Blocks />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
