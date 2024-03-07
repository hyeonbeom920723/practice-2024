import Ract from "react";

const Book = (props) => {
  return (
    <div>
      <h1>{`This book name is ${props.name} `}</h1>
      <h2>{`This book is ${props.numOfPage} pages`}</h2>
    </div>
  );
};

export default Book;
