import React from "react";
import { Grid, Paper, makeStyles } from "@material-ui/core";
import Categories from "./Categories";
import items from "./Items";

const styles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#093161",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "primary",
  },
}));

const BuyerScreen = () => {
  const classes = styles();

  const purchaseItem = () => {
    alert("This item has been added to you cart!");
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2} direction="row">
        <Grid item xs={3}>
          <Categories />
        </Grid>

        <Grid item xs={9}>
          <div className="itemGrid">
            {items.map((item) => (
              <div className="listingContainer">
                <h4 className="itemName">{item.item}</h4>
                <h2 className="itemPrice">${item.price}</h2>
                <h5 className="itemSeller">{item.seller}</h5>
                <button className="purchaseBtn" onClick={() => purchaseItem()}>
                  PURCHASE
                </button>
              </div>
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default BuyerScreen;
