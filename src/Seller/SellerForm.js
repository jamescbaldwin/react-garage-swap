import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';


// const SellerForm = () => {
  // const options = [
  //   { value: "Apparel", label: "Apparel", id: 1 },
  //   { value: "Automotive", label: "Automotive", id: 2 },
  //   { value: "Electronics", label: "Electronics", id: 3 },
  //   { value: "Furtniture & Decor", label: "Furtniture & Decor", id: 4 },
  //   { value: "Gaming", label: "Gaming", id: 5 },
  //   { value: "Jewelry", label: "Jewelry", id: 6},
  //   { value: "Miscellaneous", label: "Miscellaneous", id: 7 },
  //   { value: "Outdoor & Garden", label: "Outdoor & Garden", id: 8 },
  //   { value: "Sporting Goods", label: "Sporting Goods", id: 9 },
  //   { value: "Toys & Toddler", label: "Toys & Toddler", id: 10 },
  // ];
  
  

  function SellerForm({ addChoreLog }) {
  const [cat1, setcat1] = useState();
  const [cat2, setcat2] = useState();
  const [cat3, setcat3] = useState();

  const handleSubmit= (e) => {
    addChoreLog([cat1, cat2, cat3])
    e.preventDefault();
  }

  // FOR CATEGORY DROP DOWN OPTIONS
  const [state, setState] = useState({
    age: '',
     name: 'casey'
   });
  const classes = useStyles();

// FOR CATEGORY DROP DOWN OPTIONS
  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };


  return (
    // <form onSubmit={e => {handleSubmit(e)}}>
    <div className={classes.sellerForm}>

        <FormControl className={classes.margin} >
        <TextField id="standard-basic" label="Item Name" />
        <Select
        className={classes.select} 
          native
          value={state.category}
          onChange={handleChange}
          inputProps={{
            name: '',
            id: 'age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option>Apparel</option>
          <option>Automotive</option>
          <option>Electronics</option>
          <option>Gaming</option> 
          <option>Jewlry</option>
          <option>Miscellaneous</option>
          <option>Sporting Goods</option>
          <option>Toys & Toddler</option>
        </Select>

        <TextField id="standard-basic" label="Item Price" onChange={e => setcat1(e.target.value)} value={cat1}/>
        <TextField id="standard-basic" label="Another Category" onChange={e => setcat2(e.target.value)} value={cat2}/>
        <TextField id="standard-basic" label="And Another Category" onChange={e => setcat3(e.target.value)} value={cat3}/>
            {/* <Input
            className={classes.numberInput}
            value={values.amount}
            onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="end">$</InputAdornment>}
          /> */}
            <div className={classes.button}>
               <Button variant="outlined" color="red">
                     Post Item!
              </Button>
            </div>
        </FormControl>

        </div>
        // </form>
  );
};

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(3),
  },
  sellerForm: {
    maxWidth: "40%"
  },
  select: {
    padding: 10,
  },
 button: {
    paddingTop: 20 ,
  }
}));

export default SellerForm;