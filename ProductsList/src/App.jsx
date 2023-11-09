import './App.css';
import React, { useState} from 'react';
import Items from './components/Items';
import AddItem from './components/AddItem';
import Total from './components/Total';

function App(){
  const [data,setData]=useState({ items: [
    {id:1,product:'Pen',price:10,count:1},
    {id:2,product:'Book',price:15,count:1}
  ] });
 
  
  const incCount=(item)=>{
    const items=data["items"];
    items.map((i)=>{
      if(i.id===item.id){
        i.count+=1;
      }
    })
    setData({items:items})
    console.log(item.count)  
}

const decCount=(item)=>{
 if(item.count>=1){
  const items=data["items"];
  items.map((i)=>{
    if(i.id===item.id){
      i.count-=1;
    }
    if(i.count==0){
      delItem(i.id)
    }})
    setData({items:items})
    console.log(item.count)
 }
 else{
     delItem(item.id);
 }
}
  
  const delItem=(id)=>{
    const items=data["items"];
    const idx=items.findIndex(item=>item.id===id)
    // (start,deletecount)
    items.splice(idx,1);
    setData({items:items});
  }

  const addItem=(item)=>{
     data["items"].length >0 ?
     item.id=data["items"][data["items"].length - 1].id+1 :
      item.id=1 ;
     console.log(item.id)
     const items=data["items"];
     items.push(item);
     setData({items:items});
  }



  return(
    <>
    <h2>Products List React App</h2>
    <Items items={data["items"]} incCount={incCount} decCount={decCount} del={delItem}/>
    <AddItem items={data["items"]}  add={addItem}/>
    <Total items={data["items"]}/>
    </>
  )
}

export default App;