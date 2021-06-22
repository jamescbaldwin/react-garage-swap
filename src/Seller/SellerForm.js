import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";

const SellerForm = () => {
  const options = [
    { label: "Apparel", value: "Apparel" },
    { label: "Automotive", value: "Automotive" },
    { label: "Electronics", value: "Electronics" },
    { label: "Furtniture & Decor", value: "Furtniture & Decor" },
    { label: "Gaming", value: "Gaming" },
    { label: "Jewelry", value: "Jewelry" },
    { label: "Miscellaneous", value: "Miscellaneous" },
    { label: "Outdoor & Garden", value: "Outdoor & Garden" },
    { label: "Sporting Goods", value: "Sporting Goods" },
    { label: "Toys & Toddler", value: "Toys & Toddler" },
  ];

  const [selected, setSelected] = useState([]);

  return (
    <div  className='sellerForm'>
<form>
  <label className='formName'>
         Item Name
          <input type="text" name="name" />
   </label>

    <label className='itemPrice'>
            Item Price
            <input type="number" name="name" />
     </label>
     </form>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
};

export default SellerForm;