import { Button, Image } from "antd";
import React from "react";
import Logo from "../static/Logo.png";

const StartPage = () => {
  return (
    <div className="start_items">
      <div className="logo">
        <Image src={Logo} />
      </div>
      <div className="text">
        <h1>SAYLANI WELFARE</h1>
        <p>ONLINE DISCOUNT STORE</p>
      </div>
      <div>
        <Button className="start_btn" type="primary">
          Get Start
        </Button>
      </div>
    </div>
  );
};

export default StartPage;
