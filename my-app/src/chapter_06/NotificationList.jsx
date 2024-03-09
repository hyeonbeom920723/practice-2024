import React from "react";
import Notification from "./Notification";

const reserveNotifications = [
  {
    id: 1,
    message: "Hi this is a calendar for today",
  },
  {
    id: 2,
    message: "Lunch",
  },
  {
    id: 3,
    message: "Meeting will be in an hour",
  },
];

let timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [],
    };
  }

  componentDidMount() {
    const { notifications } = this.state;
    timer = setInterval(() => {
      if (notifications.length < reserveNotifications.length) {
        const index = notifications.length;
        notifications.push(reserveNotifications[index]);
        this.setState({
          notifications: notifications,
        });
      } else {
        this.setState({
          notifications: [],
        });
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => {
          return (
            <Notification
              message={notification.message}
              key={notification.id}
              id={notification.id}
            />
          );
        })}
      </div>
    );
  }
}

export default NotificationList;
