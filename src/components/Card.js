import React, { useState, useEffect } from "react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
const Card = (props) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem(props.id);
    if (saved === "false") setLiked(false);
    else if (saved === "true") setLiked(true);
  }, []);

  useEffect(() => {
    sessionStorage.setItem(props.id, liked);
  }, [liked]);

  return (
    <div className="max-w-3xl mx-auto mt-12">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-lg dark:bg-gray-800 dark:border-gray-700">
        <span className="card-image">
          <img
            className="rounded-t-lg"
            src={props.url}
            alt=""
            aria-labelledby="title-label"
          />
        </span>
        <div className="p-5">
          <span className="card-title">
            <h5
              id="title-label"
              className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white"
            >
              {props.title} - {props.date}
            </h5>
          </span>
          <span className="card-desc">
            <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
              {props.desc}
            </p>
          </span>
          <span className="card-actions">
            <Button
              color={liked ? "red" : "black"}
              buttonType="link"
              rounded={true}
              iconOnly={true}
              size="lg"
              ripple="dark"
              onClick={() => {
                setLiked(!liked);
              }}
            >
              <Icon name="favorite" />
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
