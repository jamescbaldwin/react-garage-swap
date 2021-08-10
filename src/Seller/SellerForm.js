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
  
  

  function SellerForm({ evt }) {


  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [ItemCondition, setItemCondition] = useState('');
  const [cat3, setcat3] = useState('');

  // const handleSubmit= (e) => {
  //   addChoreLog([cat1, cat2, cat3])
  //   e.preventDefault();
  // }
  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert("Submitting Item" )
}

  const submitButton= () => {
console.log('ITEM POSTED')
  }


const [state, setState] = useState({
  age: '',
   name: 'casey'
 });

//  const handleName = (event) => {
//   const name = event.target.name;
//   setState({
//     ...state,
//     [name]: event.target.value,
//   });}
  const handleClick = value => console.log(value);
  const handleCategories = (event) => {
    setState({
      ...state,
      [name]: event.target.value,
     
    });
  };
  const classes = useStyles();
   return (
    <form onSubmit={handleSubmit}>
      <div className={classes.form}>
           <div className={classes.sellerForm}>

               <FormControl className={classes.margin} >

               <TextField id="standard-basic" label="Item Name"
                onChange={e => setName(e.target.value)} 
                /> 

              <Select
        className={classes.select} 
          native
          value={state.category}
          onChange={handleCategories}
          inputProps={{
            name: 'Categories',
            id: 'age-native-simple',
          }}
        >
          <option aria-label="None" value="Categroies" />
          <option>Apparel</option>
          <option>Automotive</option>
          <option>Electronics</option>
          <option>Gaming</option> 
          <option>Jewelry</option>
          <option>Miscellaneous</option>
          <option>Sporting Goods</option>
          <option>Toys & Toddler</option>
        </Select>
       
        <TextField id="standard-basic" label="Item Price" onChange={e => setPrice(e.target.value)} value={price}/>
        <TextField id="standard-basic" label="Item Condition" onChange={e => setItemCondition(e.target.value)} value={ItemCondition}/>
        <TextField id="standard-basic" label="And Another Category" onChange={e => setcat3(e.target.value)} value={cat3}/>
            {/* <Input
            className={classes.numberInput}
            value={values.amount}
            onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="end">$</InputAdornment>}
          /> */}
            <div className={classes.button}>
               <Button variant="outlined" color="red" onSubmit={handleClick}  type="submit" value="Submit" onPress={submitButton}>
                     Post Item!
              </Button>
            </div>
                  </FormControl>
             </div>
           </div>
       </form>
  );
};

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(3),
  },
 form: {
  direction: 'flex',
  paddingLeft: '35%',
  width: '100%'
  },
  sellerForm: {
    alignItems: 'center',
  },
  select: {
    padding: 10,
  },
 button: {
    paddingTop: 20 ,
  }
}));

export default SellerForm;