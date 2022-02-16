import React from "react";

export const TableList = ({ children }) => {
  return <div className="flex flex-col space-y-2">{children}</div>;
};

export const TableListItem = ({ name, value }) => {
  return (
    <>
      <p className="justify-between flex">
        <span className="">{name}</span>
        <span className="text-gray-900 dark:text-white font-medium">
         {value}
        </span>
      </p>
    </>
  );
};
