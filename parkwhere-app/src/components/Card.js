import { useContext } from "react";
import styles from "./Card.module.css";
import ModeContext from "../context/ModeContext";

function Card({ children }) {
  const modeCtx = useContext(ModeContext);

  return (
    <div className={`${styles.card} ${!modeCtx.isLight && styles.dark}`}>
      {children}
    </div>
  );
}

export default Card;
