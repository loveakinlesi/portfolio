import { useState, useEffect } from "react";




const Mobile =()=>{
    const [width, setWidth] = useState(window.innerWidth);
    const [minWidth, setMinWidth] = useState(768);

function handleWindowSizeChange() {
    setWidth(window.innerWidth);
}

function setAsMobile() {
    setMinWidth(width);
    console.log(width, minWidth, isMobile);
}

function resetMinWidth(){
    setMinWidth(768);
}

useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
}, [minWidth]);


const isMobile = width <= minWidth;

return {isMobile, setAsMobile, resetMinWidth};
}

export default Mobile;