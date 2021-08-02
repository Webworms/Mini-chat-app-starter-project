import React from "react";
import { ChatScreen, Header, Body, Messages, TextInput } from "./chatscreen";

export default function MyChatScreen({ children, ...restProps }) {
  return <ChatScreen {...restProps}>{children}</ChatScreen>;
}

MyChatScreen.Header = function MyChatScreenHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

MyChatScreen.Body = function MyChatScreenBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
};

MyChatScreen.Messages = function MyChatScreenMessages({
  children,
  ...restProps
}) {
  return <Messages {...restProps}>{children}</Messages>;
};
