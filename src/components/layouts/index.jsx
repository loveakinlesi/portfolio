import React from "react";
import Navbar from "../navbars";
import Footer from "../footer";


export default function Layout({ location, children }) {

  return (
    <>
      <Navbar location={location} />
      <main className="relative main bg-white dark:bg-black text-gray-800 dark:text-gray-400 max-w-[2560px] mx-auto -mt-16">
        {children}
      </main>
      <Footer />
    </>
  );
}
