import React, { Component } from "react";

import "./Modal.scss";

interface IProps {
  closeModal: () => void;
}

class Modal extends Component<IProps> {
  render() {
    return (
      <div className="modal">
        <div onClick={this.props.closeModal} className="back-drop" />
        <div className="modal-container">
          <div className="modal-content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Modal;
