import React from "react";

const addDefaultSrc = ev => {
  ev.target.src =
    "http://www.katalystcreativegroup.com/images/blog/maintenance/404-page-not-found-message.jpg";
};

export const BannerImage = ({ url }) => (
  <img
    onError={addDefaultSrc}
    src={url}
    width={"100%"}
    height={"100%"}
    alt="placeholder"
  />
);
