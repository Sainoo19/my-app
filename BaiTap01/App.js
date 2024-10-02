import React from "react";
import { Avatar, Profile } from "./components/Avatar";

function App() {
  return (
    <div>
      <h1>Question A:</h1>
      <Avatar imageName="lion" alt="Avatar 1" style={{ width: 100, height: 100 }} />
      <Avatar imageName="cat" alt="Avatar 2" style={{ width: 100, height: 100 }} />
      <Avatar imageName="raccoon" alt="Avatar 3" style={{ width: 100, height: 100 }} />
      <Avatar imageName="messi" alt="Avatar 3" style={{ width: 100, height: 100 }} />

      <h1>Question B:</h1>
      <Profile name="messi" player={{ nationality: "Argentina", trophy: "48", ballonDor: "8", goldenBoot: "6", goal: "840" }} />

    </div>
  );
}

export default App;