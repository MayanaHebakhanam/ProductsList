const Items=(props)=>{
    
    const {items,del,incCount,decCount}=props;
    let length=items.length;

    const listItems=length ? items.map((item)=>{
        return(
            <div key={item.id+item.price} className="item">
                <p>{item.id}</p>
                <p>{item.product}</p>
                <p>{item.price}</p>
                <h2 onClick={()=>incCount(item)}> + </h2>
                <h2>{item.count}</h2>
                <h2 onClick={()=>decCount(item)}> - </h2>
                <p className="delete" onClick={()=>del(item.id)}>&times;</p>
            </div>
        )
    }) :
    <p className="text">There are no items in the cart</p>

    return(
        <div>
            <div className="item header">
            <p>Item ID</p>
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Edit</p>
            </div>
            {listItems}
         </div>
    )

}

export default Items;