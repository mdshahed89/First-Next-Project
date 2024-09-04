"use client";

import React from "react";

const Button = () => {
  return (
    <div
      onClick={() => console.log("hello")}
      className=" px-10 text-[#000] py-2 text-[1.6rem] font-semibold bg-slate-300 rounded-md "
    >
      click on the button
    </div>
  );
};

export default Button;
