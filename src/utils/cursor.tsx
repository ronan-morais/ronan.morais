"use client";
import { useEffect, useState } from "react";

const Cursor = () => {

  const [mousePosition, setMousePosition] = useState()
  const body = document.getElementsByTagName("body")

  console.log(body)
  /*  useEffect(() => {
    const cursor = document.querySelector("#cursor");
    window.addEventListener("mousemove", e => {
      const x = e.pageX;
      const y = e.pageY;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    });
  }, []); */

  /* return (
    <div
      id="cursor"
      className="cursor w-12 h-12 rounded-full translate-x-[-50%] translate-y-[-50%] bg-red-400 flex absolute"
    />
  ); */
};

export default Cursor;
