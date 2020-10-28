import React from "react";
import Image from "next/image";
import styles from "./Avatar.module.css";

function Avatar({ imgSrc, imgAlt, height, width }) {
  return (
    <div className={styles.avatar}>
      <Image src={imgSrc} alt={imgAlt} height={height} width={width} />
    </div>
  );
}

export default Avatar;
