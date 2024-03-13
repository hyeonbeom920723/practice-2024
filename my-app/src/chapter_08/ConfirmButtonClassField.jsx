import React from "react";

class ConfirmButtonClassField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isConfirmed: false,
    };

    // this.handleConfirm = this.handleConfirm.bind(this);
  }

  //   handleConfirm() {
  //     this.setState((prevState) => ({
  //       isConfirmed: !prevState.isConfirmed,
  //     }));
  //   }
  handleConfirm = () => {
    this.setState((prevState) => ({
      isConfirmed: !prevState.isConfirmed,
    }));
  };

  render() {
    return (
      <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
        {this.state.isConfirmed ? "Confirmed" : "Need to confirm"}
      </button>
    );
  }
}

export default ConfirmButtonClassField;
