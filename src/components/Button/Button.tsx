import React from "react";
import classnames from "classnames";
import styles from "./Button.module.css";

function Button({
  children,
  style,
  onClick,
  href,
}: {
  children: any;
  style: BUTTON_STYLES;
  onClick?: any;
  href?: string;
}) {
  const classNames = classnames(styles[style], styles.button);

  return href ? (
    <a href={href} className={classNames}>
      {children}
    </a>
  ) : (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}

export enum BUTTON_STYLES {
  PRIMARY = "primary",
}

Button.BUTTON_STYLES = BUTTON_STYLES;

export default Button;
