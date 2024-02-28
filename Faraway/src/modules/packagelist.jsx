import { useState } from "react"

function Packagelist({itemsArray , setitemsArray}) {
    return (
        <div style={{
            backgroundColor: 'brown',
            color: 'white',
            display: "flex",
            width: "20%",
            gap: "5px",
            height: '43vh',

        }}>
               {
                itemsArray?.map((singleItem, indx) => (
                    <Item
                        key={indx}
                        singleItems={singleItem}
                        number={indx}
                        setItemsArr={setitemsArray}
                        // itemList={itemsArray}
                    />
                ))
            }
          
            
            

        </div>
    )
}

export default Packagelist

const Item = ({ singleItems, number, setItemsArr, itemList }) => {
    // const packedHandler = (packingValue, itemNumber) => {   //false
    //     const allItems = [...itemList]  
    // allItems[number].packed = !packingValue  //true
    //     setItemsArr(allItems)
    // }
    return (
        <div style={{
            // display: "flex",
            gap: "10px",
            color:'white', 
            backgroundColor:'white'       
        }}>
            <input type="checkbox" checked={singleItems.packed}  />
            <p style={{
                color: "black",
                // textDecoration: singleItems.packed ? "line-through" : "none"
            }}>
                {
                    `${singleItems.quantity} ${singleItems.name}`
                }
            </p>
            <p>X</p>
        </div>
    )
}