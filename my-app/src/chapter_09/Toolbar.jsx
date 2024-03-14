import React from "react";
import styles from "./styles.module.scss";

const Toolbar = (props) => {
  const { isLoggedIn, onClickLogin, onClickLogout } = props;

  return (
    <div className={styles.wrapper}>
      {isLoggedIn && <span className={styles.greetingText}>Welcome</span>}

      {isLoggedIn ? (
        <button onClick={onClickLogout}>Logout</button>
      ) : (
        <button onClick={onClickLogin}>Login</button>
      )}
    </div>
  );
};

export default Toolbar;
