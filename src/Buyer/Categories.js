import React from "react";
import { Typography } from "@material-ui/core";

const Categories = () => {
  return (
    <div>
      <Typography variant="h1" color="secondary" align="left">
        Shop by Category
      </Typography>
      <ul className="categoryList">
        <a>Apparel</a>
        <a>Automotive</a>
        <a>Electronics</a>
        <a>Furtniture & Decor</a>
        <a>Gaming</a>
        <a>Jewelry</a>
        <a>Miscellaneous</a>
        <a>Outdoor & Garden</a>
        <a>Sporting Goods</a>
        <a>Toys & Toddler</a>
      </ul>
    </div>
  );
};

export default Categories;
