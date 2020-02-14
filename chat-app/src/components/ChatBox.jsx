import React from "react";

function ChatBox() {
  return (
    <div className="col-md-8 container--fixed">
      <div className="settings-tray">
        <div className="friend-drawer no-gutters friend-drawer--grey">
          <img
            className="profile-image"
            src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/robocop.jpg"
            alt=""
          />
          <div className="text">
            <h6>Robo Cop</h6>
            <p className="text-muted">
              Layin' down the law since like before Christ...
            </p>
          </div>
          <span className="settings-tray--right">
            <i className="material-icons">cached</i>
            <i className="material-icons">message</i>
            <i className="material-icons">menu</i>
          </span>
        </div>
      </div>
      <div className="chat-panel">
        <div className="chat-message">
          <div className="row no-gutters">
            <div className="col-md-3">
              <div className="chat-bubble chat-bubble--left">Hello dude!</div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-md-3 offset-md-9">
              <div className="chat-bubble chat-bubble--right">Hello dude!</div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-md-3 offset-md-9">
              <div className="chat-bubble chat-bubble--right">Hello dude!</div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-md-3">
              <div className="chat-bubble chat-bubble--left">Hello dude!</div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-md-3">
              <div className="chat-bubble chat-bubble--left">Hello dude!</div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-md-3">
              <div className="chat-bubble chat-bubble--left">Hello dude!</div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-md-3 offset-md-9">
              <div className="chat-bubble chat-bubble--right">Hello dude!</div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-md-3 offset-md-9">
              <div className="chat-bubble chat-bubble--right">Hello dude!</div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-md-3 offset-md-9">
              <div className="chat-bubble chat-bubble--right">Hello dude!</div>
            </div>
          </div>{" "}
          <div className="row no-gutters">
            <div className="col-md-3 offset-md-9">
              <div className="chat-bubble chat-bubble--right">Hello dude!</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="chat-box-tray">
              <i className="material-icons">sentiment_very_satisfied</i>
              <input type="text" placeholder="Type your message here..." />
              <i className="material-icons">mic</i>
              <i className="material-icons">send</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
