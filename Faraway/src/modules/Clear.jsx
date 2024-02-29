import React from 'react'

function Clear({itemsArray,setItemsArray}) {

let clearItems = ()=>{
  console.log('list cleared');
  setItemsArray([]);

}
  return (
    <div style={{
    backgroundColor:'brown',
    padding:'10px',
    display:'flex',
    justifyContent: 'center',

    }}>
        <select
        style={{
            border:'2px solid transparent',
            padding:'7px',
            borderRadius:'15px',
            width:'16%',
            cursor:'pointer',
          
        }}
        >
                <option value="">Sort by input order</option>
                <option value="">Sort by Description</option>
                <option value="">Sort by Packed status</option>
               
                </select>

                <button
                 style={{
                    border: '2px solid transparent',
                    borderRadius:'15px',
                    padding:'7px',
                    fontWeight:'bold',
                    width:'10%',
                    backgroundColor:'greenyellow',
                    cursor: 'pointer',
                   marginLeft:'14px',
                }}
                onClick={clearItems}
                >Clear List</button>
    </div>
  )
}

export default Clear