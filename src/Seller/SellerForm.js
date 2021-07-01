import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";
import Select from 'react-select';
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
 

  const [selected, setSelected] = useState([]);

  return (
    <div className='sellerForm'>
        <form>
            <label className='formName'>
                Item Name
                <input type="text" name="name" />
             </label>

            <label className='itemPrice'>
                Item Price
             <input type="number" />
            </label>
              <div className='dropDown'>
                <Select
                options={options}
                singleSelect={true}
                theme={theme => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: '#179c79',
                    primary: '#179c79',
                  }})}
                 />
              </div>


         </form>

    </div>
  );
};

export default SellerForm;