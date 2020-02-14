import React, { useState } from 'react';
import FriendList from './components/FriendList';
import ChatBox from './components/ChatBox';
import LoginForm from './components/LoginForm';
function App() {
  let [isAuth, setAuth] = useState(false);

  const renderChat = () => {
    if (isAuth) {
      return (
        <>
          <FriendList />
          <ChatBox />
        </>
      );
    }
    return <LoginForm />;
  };
  return (
    <div className="container">
      <div className="row no-gutters no-gutters--fixed">{renderChat()}</div>
    </div>
  );
}

export default App;
