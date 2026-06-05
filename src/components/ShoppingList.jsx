import React, { useState } from 'react'

const ShoppingList = () => {

    const [item, addItem] = useState([])
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')
   
    const handleSubmit = (e) =>{

        e.preventDefault();

        if(!name || !quantity) return ;

        const newItem = {
            name , quantity: parseInt(quantity),
        }

        addItem((prevItem) => [...prevItem,newItem])
        setName("")
        setQuantity("")
    }



    return (
        <div>

            <h1>Shopping Item</h1>

            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={name} placeholder='Item Name' onChange={(e) => setName(e.target.value)} />
                <input type="text" value={quantity} placeholder='quantity' onChange={(e) => setQuantity(e.target.value)} />

                <button type="submit" >Add</button>

            </form>
            <ul>
                {item.map((item,index)=> (
                    <li key={index}>
                        {item.name} - Quantity: {item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList
