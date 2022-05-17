import React from "react";

export const SubscribeComponent = ({background='#131414', color='#e2e2e2'}) => {
  return (
    <iframe className="w-100 h-[100px] mx-auto"
    title="Subscribe"
      src="https://loveakinlesi.substack.com/embed"
      style={{border: 'none', background: background, color: color, width: '100%'}}
      frameBorder="0"
      scrolling="no"
    ></iframe>
  );
};

