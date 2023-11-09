import React, { useState} from 'react';

function AddItem(props){
    
    const [items,setItems] = useState({
        product: '',
        price: '',
        count:''
    })

    const handleChange = (e) => {
      console.log(e.target.id+" "+e.target.value)
      setItems({
        ...items,
        [e.target.id] :e.target.value,
        count:1,
      })
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.add(items)
        setItems({
            product:'',
            price:'',
            count:''
        })
    }


        return(
            <div className="item">
                <form onSubmit={handleSubmit}>
                    <input type="text" value={items.product}  placeholder="Enter Product" id="product" onChange={handleChange} required/>
                    <input type="number" value={items.price}  placeholder="Enter Price" id="price" onChange={handleChange} required/>
                    <input type="submit" value="Add"/>
                </form>
            </div>
        )
    
}

export default AddItem;