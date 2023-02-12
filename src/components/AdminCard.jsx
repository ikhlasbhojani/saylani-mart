import React from 'react'
import Ellipse from "../static/Ellipse 4.png"
import { MdOutlineArrowBackIos, } from "react-icons/md";
import { GiSettingsKnobs } from "react-icons/gi";

const AdminCard = () => {
  return (
    <div className='admin_card'>
        <div className="admin_icon">
            <MdOutlineArrowBackIos className='ic'/>
        </div>
        <div className="card_img">
            <img src={Ellipse} alt="" />
        </div>
        <div className="card_text">
            <h2>Ahmad Khan</h2>
            <p>Admin</p>
        </div>

        <div className="admin_icon">
            <GiSettingsKnobs  className='ic2'/>
        
        </div>
    </div>
  )
}

export default AdminCard