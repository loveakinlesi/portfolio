import { useState, useEffect } from "react";




const Mobile =()=>{

    const [width, setWidth] = useState(typeof window !== `undefined` ? window.innerWidth : 1024);
    const [minWidth, setMinWidth] = useState(768);

function handleWindowSizeChange() {
    if (typeof window !== `undefined`){ 
        setWidth(window.innerWidth);
  }
}

function setAsMobile() {
    setMinWidth(width);
    console.log(width, minWidth, isMobile);
}

function resetMinWidth(){
    setMinWidth(768);
}

useEffect(() => {
    if (typeof window !== `undefined`){ 
        window.addEventListener('resize', handleWindowSizeChange);
  }
    return () => {
        if (typeof window !== `undefined`){ 
            window.removeEventListener('resize', handleWindowSizeChange);
      }
    }
}, [minWidth]);


const isMobile = width <= minWidth;

return {isMobile, setAsMobile, resetMinWidth};
}

export default Mobile;