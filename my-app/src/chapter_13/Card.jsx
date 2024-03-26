import React from "react";
import styles from "./card.module.scss";

const Card = (props) => {
  const { title, backgroundColor, children } = props;

  return (
    //   TODO: Inline styling 대신 backgroundColor를 어떻게 넘길수있는지 궁금합니다.
    //
    <div className={styles.cardContainer} style={{ backgroundColor }}>
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
};

export default Card;
