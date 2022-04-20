import React from "react";
import Navbar from "../navbars";
import Footer from "../footer";


export default function Layout({ location, children }) {

  return (
    <>
      <Navbar location={location} />
      <main className="relative main bg-dark text-white-alt  max-w-[2560px] mx-auto -mt-16">
        {children}
      </main>
      <Footer />
    </>
  );
}
