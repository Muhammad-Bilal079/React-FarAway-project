import React from 'react'

function Clear() {
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
                >Clear List</button>
    </div>
  )
}

export default Clear