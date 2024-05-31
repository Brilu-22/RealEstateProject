import { useState } from "react";
import "./chat.scss";

function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img src="John.jpg" alt="" />
          <span>John Doe</span>
          <p>How much is the House ?</p>
        </div>
        <div className="message">
          <img src="John.jpg" alt="" />
          <span>John Doe</span>
          <p>How much is the House ?</p>
        </div>
        <div className="message">
          <img src="John.jpg" alt="" />
          <span>John Doe</span>
          <p>How much is the House ?</p>
        </div>
        <div className="message">
          <img src="John.jpg" alt="" />
          <span>John Doe</span>
          <p>How much is the House ?</p>
        </div>
        <div className="message">
          <img src="John.jpg" alt="" />
          <span>John Doe</span>
          <p>How much is the House ?</p>
        </div>
        <div className="message">
          <img src="John.jpg" alt="" />
          <span>John Doe</span>
          <p>How much is the House ?</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src="John.jpg" alt="" />
              John Doe
            </div>
            <span className="close" onClick={() => setChat(null)}>
              x
            </span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>You are more than welcome to come...</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>When can we meet to finalize the deal?</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>You are more than welcome to come...</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>When can we meet to finalize the deal?</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>You are more than welcome to come...</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>When can we meet to finalize the deal?</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>You are more than welcome to come...</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>When can we meet to finalize the deal?</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage ">
              <p>You are more than welcome to come...</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
