import React, { useRef, useEffect } from "react";
import "./Modal.scss";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const modalBody = useRef();

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick, false);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick, false);
    };
  }, []);

  const handleClick = (e) => {
    if (modalBody.current.contains(e.target)) {
      return;
    }
    handleClose();
  };

  return (
    <div className={showHideClassName}>
      <section className="modal-body" ref={modalBody}>
        {children}
      </section>
    </div>
  );
};

export default Modal;
