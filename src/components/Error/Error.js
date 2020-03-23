import React from "react";
import styles from "./Error.module.css";

export default function Error({ message }) {
  return <p className={styles.errorMessage}>{message}</p>;
}
