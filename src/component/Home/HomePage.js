import React from "react";
import Navbar from "./../Navbar/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import Product from "../Product/Product";

const HomePage = () => {
  const [userData, setUserdata] = useState([]);
  useEffect(() => {
    const getUserdata = async () => {
      const reqdata = await fetch(
        "http://localhost:5000/api/v1/product/getallproducts"
      );
      const resData = await reqdata.json();
      setUserdata(resData);
      console.log(resData);
    };
    getUserdata();
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ margin: "120px" }}>
        <input type="text" placeholder="Search by the title ..." />
      </div>
      {/* <div>
        {userData.map((user, index) => (
          <ul key={index}>
            <li>{user.productname}</li>
            <li>{user.image}</li>
            <li>{user.productcode}</li>
            <li>{user.category}</li>
            <li>{user.manufacturedate}</li>
            <li>{user.expirydate}</li>
            <li>{user.owner}</li>
            <li>{user.status}</li>
          </ul>
        ))}
      </div> */}
    </div>
  );
};

export default HomePage;
