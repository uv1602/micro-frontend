import "./Button.css";
import Payment from "../payment";
import { useState } from "react";

function Button() {
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      {isActive ? (
        <button
          style={{ margin: "5%" }}
          className="shared-btn"
          onClick={() => setIsActive(!isActive)}
        >
          {"Pay"}
        </button>
      ) : (
        <Payment />
      )}
    </>
  );
}

export default Button;
