import React, { useState } from "react";
import "./ToggleStyles.css";
// stateless funtional component
// function Toggle() {
//   return <div className="toggle"></div>;
// }
// stateful functional component
// function Toggle2() {
//   // const[count, setCount] = useState();
//   return <div className="toggle"></div>;
// }
function Toggle() {
  // const array = useState(false);
  // console.log(array);
  // console.log(array[0]);
  // console.log(array[1]);
  const [on, setOn] = useState(false);
  // console.log(on, setOn);
  // console.log(on);
  // return (
  //   <div className="toggle" onClick={() => setOn(true)}>
  //     Toggle {on ? "On" : "Off"}
  //   </div>
  // );
  const handleToggle = () => {
    setOn((on) => !on);
  };
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
      {/* {on ? "On" : "Off"}
      <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          On
        </div>
        <div className="toggle-off" onClick={() => setOn(false)}>
          Off
        </div>
      </div> */}
    </div>
  );
}
export default Toggle;
