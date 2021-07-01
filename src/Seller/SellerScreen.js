import React from "react";
import SellerForm from "./SellerForm";

const SellerScreen = () => {
  return ( 
    <div>
        <h1 className='sellerHeader'> Garage Swap Seller's Page</h1> 
        <div>
        <SellerForm />
        </div>
    </div>

  );
};

export default SellerScreen;