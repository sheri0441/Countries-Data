import { createPortal } from "react-dom";

const Preloader = (props) => {
  return createPortal(
    <div className={`w-screen h-screen bg-whiteBG fixed top-0 left-0 z-50`}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
        <p className="font-bold text-6xl   animate-bounce">Loading</p>
      </div>
    </div>,
    document.getElementById("top")
  );
};

export default Preloader;
