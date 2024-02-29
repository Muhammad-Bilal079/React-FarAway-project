import { useState } from "react"

function Packagelist({ itemsArray, setitemsArray }) {
    return (
        <div style={{
            backgroundColor: 'brown',
            color: 'white',
            display: "flex",
            width: "100%",
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
                        itemList={itemsArray} //yahan commentkarna hai
                    />
                ))
            }




        </div>
    )
}

export default Packagelist

const Item = ({ singleItems, number, setItemsArr, itemList }) => {

    const packedHandler = (packingValue, itemNumber) => {   //false
        const allItems = [...itemList]
        allItems[number].packed = !packingValue  //true
        setItemsArr(allItems)
    }

    return (
        <div style={{
            display: "flex",
            gap: "10px",
            color: 'black',
            border: '1px solid orange',
            borderRadius: '40px',
            height: '15%',
            padding: '5px',
            width: 'auto',
            margin: "5px"
        }}>
            <input type="checkbox" checked={singleItems.packed} onChange={() => packedHandler(singleItems.packed, number)} />
            
            <p style={{
                color: "#dbc69b",
                textDecoration: singleItems.packed ? "line-through" : "none"
            }}>
                {
                    `${singleItems.quantity} ${singleItems.name}`
                }
            </p>
            <p
                style={{ cursor: "pointer" }}

            >X</p>
        </div>
    )
}