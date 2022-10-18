import React from 'react';
import {ReactDOM, createPortal} from 'react-dom';


const Preloader = (props) => {
    return createPortal(<div className={`w-screen h-screen bg-whiteBG fixed top-0 left-0 z-50 ${props.form}`}>
        <p className="font-bold text-6xl absolute top-1/2 left-1/2 -translate-x-full -translate-y-full animate-bounce">W</p>
    </div>,document.getElementById('top'))
}

export default Preloader;