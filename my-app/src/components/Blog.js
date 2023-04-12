import React, { useEffect, useRef } from "react";
import useHover from "../hooks/useHover";
import useLinkNewTab from "../hooks/useLinkNewTab";

const Blog = () => {
  // const contentRef = useRef(null);
  // useEffect(() => {
  //   if (contentRef.current) {
  //     const links = contentRef.current.querySelectorAll("a");
  //     links.forEach((item) => item.setAttribute("target", "_blank"));
  //   }
  // }, []);
  const { contentRef: demoRef } = useLinkNewTab();
  const { hovered, nodeRef } = useHover();
  return (
    <div className="entry-content" ref={demoRef}>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem illo
        odit rem officiis non dolorum iste dolor est, sapiente voluptatum
        doloribus quae ducimus expedita fugit eligendi totam aliquid tenetur
        iure.
        <a
          href="https://google.com"
          className={`underline ${hovered ? "text-green-500" : ""}`}
          ref={nodeRef}
        >
          google.com
        </a>
      </p>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem illo
        odit rem officiis non dolorum iste dolor est, sapiente voluptatum
        doloribus quae ducimus expedita fugit eligendi totam aliquid tenetur
        iure.
        <a href="https://google.com" className="underline">
          google.com
        </a>
      </p>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem illo
        odit rem officiis non dolorum iste dolor est, sapiente voluptatum
        doloribus quae ducimus expedita fugit eligendi totam aliquid tenetur
        iure.
        <a href="https://google.com" className="underline">
          google.com
        </a>
      </p>
    </div>
  );
};

export default Blog;
