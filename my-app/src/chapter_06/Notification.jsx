import React from "react";
import styles from "./styles.module.scss";

class Notification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log(`${this.props.id} Did Mount called`);
  }
  componentDidUpdate() {
    console.log(`${this.props.id} Did Update called`);
  }
  componentWillUnmount() {
    console.log(`${this.props.id} Will UnMount called`);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <span className={styles.messageText}>{this.props.message}</span>
      </div>
    );
  }
}

export default Notification;
