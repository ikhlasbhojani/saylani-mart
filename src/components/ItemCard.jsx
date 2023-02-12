import React from 'react'
import image from "../static/image 18.png"

const ItemCard = () => {
  return (
    <div className="item_card">
      <div className="item_img">
        <img src={image} alt="" />
      </div>
      <div className="item_text">
        <h2>Apple</h2>
        <p>1.5 kg</p>
      </div>
      <div className="item_price">
        <p>Rs 500</p>
      </div>
    </div>
  )
}

export default ItemCard