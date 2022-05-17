import React from "react";

const Container = ({ topClasses, subClasses, padding, children }) => {
  return (
    <section
      className={`${padding ? padding : "py-[16rem]"} ${
        topClasses ? topClasses : ""
      }`}
    >
      <div className={`container mx-auto ${subClasses ? subClasses : ""}`}>
        <div className="px-2 lg:px-8 mx-4 lg:mx-0">
          <div className="mx-auto px-4 max-w-5xl">
              {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Container;
