import React from "react";
import ReactDOM from "react-dom";

const name = "shehan";

ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p className="p2">coppyright {new Date().getFullYear()}</p>
  </div>,
  document.getElementById("root")
);
