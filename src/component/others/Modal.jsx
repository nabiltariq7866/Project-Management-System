import React from "react";
import { createPortal } from "react-dom";

export default function Modal({ isOpen, setIsOpen, children }) {
  return createPortal(
    <div
      onClick={() => setIsOpen(false)}
      className={`fixed inset-0 flex items-center justify-center bg-black/40 px-4 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-xl grow rounded-lg bg-black p-4 shadow-lg"
      >
        {children}
      </div>
    </div>,
    document.getElementById("model")
  );
}
