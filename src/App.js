import logo from './logo.svg';
import './App.css';
import Listbox from './components/Listbox';
import Total from './components/Total';
import Inputdata from './components/Inputdata';
import { useState } from 'react';

function App() {
  const [items,setitems]=useState([])
  const handleadd=(value)=>{
    setitems([...items,value])
    
  }
  const totalsum=(items)=>{
    console.log("data",items)
   return  items.reduce((a,b)=>a+(Number(b.price)*Number(b.quantity)),0)
  }
 
  const addquantity=(id,amount)=>{
    console.log(id,amount)
    const newdata=items.map((el)=>{
      if(id==el.id){
       el.quantity=Number(el.quantity)+Number(amount)
      }
      return el
    })
    setitems([...newdata])
  console.log(items)
  }
  
  return (
    <div className="App">
      <Inputdata handleadd={handleadd} />
      <div style={{border:"1px solid red",height:"fit-content",width:"400px",margin:"auto",paddingTop:"20px"}}>
      <div>
        {
          items.map((el)=><Listbox item={el} addquantity={addquantity}/>)
        }
      </div>
      <Total total={totalsum(items)}/>
     {/* <Listbox/>
     <Total/> */}
     </div>
    </div>
  );
}

export default App;
