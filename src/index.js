import React from "react";
import ReactDom from "react-dom";

// function Greeting() {
//   return <h1>i'm raamn</h1>;
// }
const  Greeting=()=> {
  return React.createElement('h1',{},'raman')
}

ReactDom.render(<Greeting />, document.getElementById("root"));
