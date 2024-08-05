import { ReactNode } from "react";
import "./index.css";

interface PointerProps {
  isSelected: boolean;
}

interface PointerWrapperProps {
  children?: ReactNode;
}

function Pointer({ isSelected }: PointerProps) {
  return (
    <li className={`pointer ${isSelected ? "selected" : "non-selected"}`}></li>
  );
}

function PointerWrapper({ children }: PointerWrapperProps) {
  return <ul className="pointer-wrapper">{children}</ul>;
}

export default Object.assign(PointerWrapper, {
  Pointer: Pointer,
});
