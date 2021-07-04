import React from "react";
import { Grid, Paper } from "@material-ui/core";

const BuyerScreen = () => {
  const items = [
    {
      item: "Bicycle",
      price: 200,
      seller: "John Smith",
    },
    {
      item: "Bookshelf",
      price: 30,
      seller: "Patricia M.",
    },
    {
      item: "Candle-maker",
      price: 35,
      seller: "Suzy Q.",
    },
    {
      item: "DVD (Law & Order: complete series)",
      price: 85,
      seller: "Max Johansen",
    },
    {
      item: "Fishing Set",
      price: 80,
      seller: "Sofia Muller",
    },
    {
      item: "Nintendo-64",
      price: 200,
      seller: "Björn Thornborg",
    },
    {
      item: "Golf Iron Set",
      price: 175,
      seller: "Alex Reiter",
    },
    {
      item: "Lawn Mower",
      price: 100,
      seller: "Taylor Reid",
    },
    {
      item: "Baby Crib",
      price: 110,
      seller: "Monica Selez",
    },
    {
      item: "Coffe Table",
      price: 45,
      seller: "Kaite Mendoza",
    },
    {
      item: "Office Chair",
      price: 120,
      seller: "Victor Billups",
    },
    {
      item: "Microwave",
      price: 60,
      seller: "Quinton Blackwell",
    },
  ];

  return (
    <div>
      <div className="buyerHeader">
        <h1>Welcome to the Buyer's Page of Garage-Swap</h1>
      </div>
      <div className="itemGrid">
        {items.map((item) => (
          <div className="listingContainer">
            <h4 className="itemName">{item.item}</h4>
            <h2 className="itemPrice">${item.price}</h2>
            <h5 className="itemSeller">{item.seller}</h5>
            <button className="purchaseBtn">Purchase</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyerScreen;
