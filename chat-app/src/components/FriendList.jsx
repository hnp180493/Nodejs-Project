import React, {useEffect} from "react";

function FriendList() {
  useEffect(() => {
    document.querySelectorAll(".friend-drawer--onhover").forEach(item => {
      item.addEventListener("click", async function() {
        document
          .querySelectorAll(".chat-bubble")
          .forEach(el => (el.hidden = true));
        await new Promise(resolve => setTimeout(resolve, 300));
        document
          .querySelectorAll(".chat-bubble")
          .forEach(el => (el.hidden = false));
      });
    });

    document.querySelector("#openMenu").addEventListener("click", e => {
      let leftPanel = document.querySelector(".left-panel-slide");
      leftPanel.classList.add("open-slide");
    });

    document.querySelector("#closeMenu").addEventListener("click", () => {
      let leftPanel = document.querySelector(".left-panel-slide");
      leftPanel.classList.remove("open-slide");
    });
  });
  return (
    <div className="col-md-4 border-right">
      <div className="left-panel">
        <div className="settings-tray">
          <img
            className="profile-image"
            src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/filip.jpg"
            alt="Profile img"
          />
          <span className="settings-tray--right">
            <i className="material-icons">cached</i>
            <i className="material-icons">message</i>
            <i className="material-icons" id="openMenu">
              menu
            </i>
          </span>
        </div>
        <div className="search-box">
          <div className="input-wrapper">
            <i className="material-icons">search</i>
            <input placeholder="Search here" type="text" />
          </div>
        </div>
        <div className="friends">
          <div className="friend-drawer friend-drawer--onhover">
            <img
              className="profile-image"
              src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/robocop.jpg"
              alt=""
            />
            <div className="text">
              <h6>Robo Cop</h6>
              <p className="text-muted">Hey, you're arrested!</p>
            </div>
            <span className="time text-muted small">13:21</span>
          </div>
          <hr />
          <div className="friend-drawer friend-drawer--onhover">
            <img
              className="profile-image"
              src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/optimus-prime.jpeg"
              alt=""
            />
            <div className="text">
              <h6>Optimus</h6>
              <p className="text-muted">Wanna grab a beer?</p>
            </div>
            <span className="time text-muted small">00:32</span>
          </div>
          <hr />
          <div className="friend-drawer friend-drawer--onhover ">
            <img
              className="profile-image"
              src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/real-terminator.png"
              alt=""
            />
            <div className="text">
              <h6>Skynet</h6>
              <p className="text-muted">Seen that canned piece of s?</p>
            </div>
            <span className="time text-muted small">13:21</span>
          </div>
          <hr />
          <div className="friend-drawer friend-drawer--onhover">
            <img
              className="profile-image"
              src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/termy.jpg"
              alt=""
            />
            <div className="text">
              <h6>Termy</h6>
              <p className="text-muted">Im studying spanish...</p>
            </div>
            <span className="time text-muted small">13:21</span>
          </div>
          <hr />
          <div className="friend-drawer friend-drawer--onhover">
            <img
              className="profile-image"
              src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/rick.jpg"
              alt=""
            />
            <div className="text">
              <h6>Richard</h6>
              <p className="text-muted">I'm not sure...</p>
            </div>
            <span className="time text-muted small">13:21</span>
          </div>
          <hr />
          <div className="friend-drawer friend-drawer--onhover">
            <img
              className="profile-image"
              src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/rachel.jpeg"
              alt=""
            />
            <div className="text">
              <h6>XXXXX</h6>
              <p className="text-muted">Hi, wanna see something?</p>
            </div>
            <span className="time text-muted small">13:21</span>
          </div>
          <div className="friend-drawer friend-drawer--onhover">
            <img
              className="profile-image"
              src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/rick.jpg"
              alt=""
            />
            <div className="text">
              <h6>Richard</h6>
              <p className="text-muted">I'm not sure...</p>
            </div>
            <span className="time text-muted small">13:21</span>
          </div>
          <hr />
        </div>
      </div>
      <div className="left-panel-slide">
        <i className="material-icons" id="closeMenu">
          close
        </i>
        <div className="left-panel-slide--menu">
          <div className="left-panel-slide--menu-item">
            <i className="material-icons">supervisor_account</i>
            <span>New Group</span>
          </div>
          <div className="left-panel-slide--menu-item">
            <i className="material-icons">accessible</i>
            <span>Contacts</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendList;
