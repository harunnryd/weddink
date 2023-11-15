import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const ModalOverlay = (props) => {
  return (
    <div className={`fixed bottom-2 right-2 z-50`}>
      <div>{props.children}</div>
    </div>
  );
};

const AudioModal = (props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return (
    <>
      {mounted
        ? createPortal(
            <ModalOverlay>{props.children}</ModalOverlay>,
            document.querySelector("#audio")
          )
        : null}
    </>
  );
};

export default AudioModal;
