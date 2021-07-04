import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const SellerForm = () => {
  const options = [
    { value: "Apparel", label: "Apparel", id: 1 },
    { value: "Automotive", label: "Automotive", id: 2 },
    { value: "Electronics", label: "Electronics", id: 3 },
    { value: "Furtniture & Decor", label: "Furtniture & Decor", id: 4 },
    { value: "Gaming", label: "Gaming", id: 5 },
    { value: "Jewelry", label: "Jewelry", id: 6},
    { value: "Miscellaneous", label: "Miscellaneous", id: 7 },
    { value: "Outdoor & Garden", label: "Outdoor & Garden", id: 8 },
    { value: "Sporting Goods", label: "Sporting Goods", id: 9 },
    { value: "Toys & Toddler", label: "Toys & Toddler", id: 10 },
  ];
  
  const classes = useStyles();
  // const [values, setValues] = React.useState({
  //   amount: '',
  //   password: '',
  //   weight: '',
  //   weightRange: '',
  //   showPassword: false,
  // });

  const [state, setState] = useState({
   age: '',
    name: 'casey'
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  return (
    <div className={classes.sellerForm}>
        <FormControl className={classes.margin} >

        <TextField id="standard-basic" label="Item Name" />

        <Select
        className={classes.select} 
          native
          value={state.category}
          onChange={handleChange}
          inputProps={{
            name: 'age',
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

        <TextField id="standard-basic" label="Item Price" />
        <TextField id="standard-basic" label="Another Category" />
        <TextField id="standard-basic" label="And Another Category" />
            {/* <Input
            className={classes.numberInput}
            value={values.amount}
            onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="end">$</InputAdornment>}
          /> */}
        </FormControl>
        </div>
  );
};

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  sellerForm: {
    maxWidth: "40%"
  },
  select: {
padding: 10,
  }
}));

export default SellerForm;