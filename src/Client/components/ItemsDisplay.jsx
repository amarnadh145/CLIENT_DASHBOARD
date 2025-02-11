import React, { useState } from 'react'
import { itemData } from '../Data'

const ItemsDisplay = () => {
    const [displayItems, setDisplayItems] = useState(itemData)
    return (
        <div className="itemSection">
            {displayItems.map((item) => {
                return (
                    <div className="gallery">
                        <img src={item.item_img} alt={item.name} />
                        <p className="itemName">{item.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemsDisplay
