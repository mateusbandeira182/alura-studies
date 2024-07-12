import React from "react";
import style from './Button.module.scss';
interface IProps {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void;
}

function Button({ type = "button", onClick, children }: IProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={style.botao}
    >
      {children}
    </button>
  );
}

export default Button;