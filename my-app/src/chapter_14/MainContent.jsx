import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import styles from "./styles.module.scss";

const MainContent = (props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className={styles.contentContainer}
      style={{
        backgroundColor: theme == "light" ? "white" : "black",
        color: theme == "light" ? "black" : "white",
      }}
    >
      <p>Hi This is website can change theme</p>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
};

export default MainContent;
