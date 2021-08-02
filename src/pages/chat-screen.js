import React, { useState } from "react";
import "../styles/chat-screen.css";
import { MyChatScreen } from "../components";
import { ChatForm, ChatScreenMessages, Header } from "../containers";

export default function ChatScreen() {

  const [messages, setMessages] = useState([]);

  return (
    <MyChatScreen>
      <MyChatScreen.Header>
        <Header />
      </MyChatScreen.Header>
      <MyChatScreen.Body>
        <div className="messages_body">
          {messages.length != 0 ? (
            <div className="chat-screen-text">
              <p>
                <span>No messages</span> are available
              </p>
            </div>
          ) : (
            <div className="mb-4">
              <ChatScreenMessages />
            </div>
          )}
        </div>
        <div className="form-wrapper">
          <ChatForm />
        </div>
      </MyChatScreen.Body>
    </MyChatScreen>
  );
}
