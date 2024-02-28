import React from 'react'

function Footer() {
  return (
    <div
    style={{
        padding: '10px',
        backgroundColor:'gray',
        fontSize: '18px',
        display: 'flex',
        justifyContent: 'center',
    }}
    >
        <p>You have 4 items select on your list and you already packed 0 items</p>
    </div>
  )
}

export default Footer