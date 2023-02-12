import React from "react";
import AdminCard from "./AdminCard"
import ItemCard from "./ItemCard"


const AddItem = () => {
  return (
    <div className="addItems_container">
    <AdminCard />
    <ItemCard/>
    </div>
  );
};

export default AddItem;
