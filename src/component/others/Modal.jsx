import React, { useContext } from "react";
import { createPortal } from "react-dom";
import AppContext from "../../context/AuthContext";

export default function Modal({ children }) {
  const context =useContext(AppContext)
  return createPortal(
    <div
      onClick={() => {
        console.log("close model")
        context.setEditAddInput([''])
        context.setaddInput([""])
        context.setIsOpen(false)

      }}
      className={`fixed inset-0 flex items-center justify-center bg-black/40 px-4 ${
        context.isOpen ? "" : "hidden"
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
