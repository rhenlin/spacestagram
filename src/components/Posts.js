import React from "react";
import Card from "./Card";

const Posts = (props) => {
  return (
    <div className="flex flex-col">
      {props.posts.map((post, index) => {
        return (
          <Card
            id={index}
            title={post.title}
            date={post.date}
            url={post.hdurl}
            desc={post.explanation}
          />
        );
      })}
    </div>
  );
};

export default Posts;
