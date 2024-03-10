import { useState } from "react"


function Input ({items , setitemsArray}) {

    const[quantity , setQuantity] = useState(1)
    const[itemname , setItemName] = useState("")

    function addItem(){
        let newData = {
            quantity: quantity,
            name : itemname,
            packed: false,
        }
        setitemsArray([...items , newData])
        // console.log('hello');
        console.log(items);
        setQuantity(1)  
        setItemName("")
    }


    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'red',
            alignItems:  "center",
            gap: '20px',
            padding:'5px 0',
        }}>
        <p>What do you need for your trip ?</p>
        <select
        style={{
            border:'2px solid red',
            padding:'6px',
            borderRadius:'15px',
            width:'60px',
            cursor:'pointer',
        }}
        value={quantity}
        onChange={(e)=>setQuantity(e.target.value)}
        >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                </select>
        <input
        style={{
            outline: 'none',
            padding:'6px',
            border: '2px solid red',
            borderRadius:'15px',
        }}
        value={itemname}
        onChange={(e)=>setItemName(e.target.value)}
        type="text" placeholder="Boadring passess"/>
        <button
        style={{
            border: '2px solid red',
            borderRadius:'15px',
            padding:'6px',
            fontWeight:'bold',
            width:'60px',
            backgroundColor:'greenyellow',
            cursor: 'pointer',
        }}
        onClick={addItem}
        >ADD</button>
        
        </div>
    )
}

export default Input