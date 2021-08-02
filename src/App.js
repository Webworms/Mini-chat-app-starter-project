import React from "react";
import UseAuthListener from "./hooks/use-auth-listener";
// pages
import Authentication from "./pages/authentication";
import ChatScreen from "./pages/chat-screen.js";

const App = () => {
  const user = null;

  return (
    <div className="App">{user ? <ChatScreen /> : <Authentication />}</div>
  );
};

export default App;
