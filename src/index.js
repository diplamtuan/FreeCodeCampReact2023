import React from "react";
import ReactDOM from "react-dom/client";
function Geeting() {
  return <h1>Hello world</h1>;
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Geeting />);
