import React from "react";
import { MyChatScreen } from "../../../components";
import User from '../../../images/user.jpg';

export default function ChatScreenMessages() {
  return (
    <MyChatScreen.Messages className="mb-3">
      <div className="message">
        <img src={User} />
        <div className="message_info">
          <h4 className="username">John</h4>
          <div>
            <p className="badge bage-info messageText">Hello guys</p>
            <small className="time">
              <span>Monday, 12:00pm</span>
            </small>
          </div>
        </div>
      </div>
    </MyChatScreen.Messages>
  );
}
