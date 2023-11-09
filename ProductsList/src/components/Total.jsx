const Total=(props)=>{

    const {items}=props;
    let total=0;
    for(let i=0;i<items.length;i++){
        console.log((items[i].count))
        let count= items[i].count;
        total+= parseFloat((items[i].price)*count);
    }
    return(
        <div>
           <p className="text">Total Price is: {total}</p> 
        </div>
    )
}

export default Total;