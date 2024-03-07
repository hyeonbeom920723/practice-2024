import React from "react";
import Book from "./Book";

const Library = (props) => {
  return (
    <div>
      <Book name="Python" numOfPage={300} />
      <Book name="AWS" numOfPage={400} />
      <Book name="React" numOfPage={500} />
    </div>
  );
};

export default Library;
