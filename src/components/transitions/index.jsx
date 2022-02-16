import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

export const ProgressOnScroll= ({level})=> {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const { current } = domRef;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.unobserve(current);
      }
    });
    observer.observe(domRef.current);
    return () => observer.disconnect(current);
  }, []);

  const colors = classnames({
    "from-purple-500 to-violet-600": +level >= 75,
    "from-sky-400 to-blue-600": +level < 75,
  });

  return (
    <div className="w-full bg-transparent rounded-full ">
      <div 
        className={`bg-gradient-to-r h-[6px] leading-none rounded-full ${colors} transition-all ease-in-out delay-250 duration-[1500ms]`}
        role="progressbar"
        aria-label="Progress Bar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={level}
        ref={domRef}
        style={{ width: `${isVisible ? level : 0}%` }}
      ></div>
    </div>
  );
}



export const FadeInSection = (props) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef(null);

    useEffect(() => {
      const { current } = domRef;
      const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
      
            setVisible(true);
            observer.unobserve(current);
          }
      });
      observer.observe(domRef.current);
        return () => observer.disconnect(current);;
    }, []);

    const visible = classnames({
      "opacity-0 translate-y-6": !isVisible,
      "": isVisible,
    });

    return (
      <div
        className={`transition-all ease-in-out delay-250 duration-[1500ms] ${visible}  ${props.className ? props.className : ''}`}
        id={props.id}
        ref={domRef}
        style={props.style}
      >
        {props.children}
      </div>
    );
  }
