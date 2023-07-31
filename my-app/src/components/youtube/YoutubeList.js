import React from "react";
import { YoutubeData } from "../../data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
  console.log(props);
  return (
    // <div className="youtube-list">
    //   {YoutubeData.map((item, index) => (
    //     <YoutubeItem
    //       key={item.id}
    //       image={item.image}
    //       avatar={item.avatar || item.image}
    //       title={item.title}
    //       author={item.author}
    //     ></YoutubeItem>
    //   ))}
    // </div>
    <div className="youtube-list">
      {props.children}
      {YoutubeData.map((item, index) => {
        let newClass = "";
        if (index === 1) newClass = "abc";
        return (
          <YoutubeItem
            key={item.id}
            image={item.image}
            avatar={item.avatar || item.image}
            title={item.title}
            author={item.author}
            // className={index === 1 ? "abc" : ""}
            className={newClass}
          ></YoutubeItem>
        );
      })}
    </div>
  );
};

export default YoutubeList;
