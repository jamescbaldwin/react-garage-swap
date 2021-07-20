import React, { useState } from "react";
import SellerForm from "./SellerForm";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';



const SellerScreen = () => {

  return ( 
      <div>
         <div className={classes.sellerHeader}>
            <Typography className={classes.headerText}>Garage Swap</Typography> 
         </div>
        <SellerForm />
    </div>

  );
};


const useStyles = makeStyles((theme) => ({
  sellerHeader: {
    minWidth: '100%',
    backgroundColor: 'grey',
    height: 100,
  },
  sellerForm: {
    maxWidth: "40%",
    borderColor: 'red'
  },
  sellerText: {
  marginLeft: '10%'
  },
  select: {
    padding: 10,
  },
}));


export default SellerScreen;