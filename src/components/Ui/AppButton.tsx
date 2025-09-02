import "./AppButton.css";
import styles from "./AppButton.module.css";

import type { ReactNode, ButtonHTMLAttributes } from "react";

interface AppButtonProps {
  children: ReactNode;
  tipKnobki?: "outlined" | "contained" | "warning" | "danger";
}
type CommonTypes = AppButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

const AppButton = (props: CommonTypes) => {
  console.log(props.children);
  const { children, tipKnobki, ...rest } = props;
  return (
    <button className={`${styles.appButton} ${styles[tipKnobki || "outlined"]}`} {...rest}>
      {children}
    </button>
  );
};

export default AppButton;
