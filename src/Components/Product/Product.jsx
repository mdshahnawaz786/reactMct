import React, { useContext } from "react";
import './product.css'
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { GlobalData } from "../../App";





const Product = () => {

  const obj = useContext(GlobalData);

  return (
    <>
    <Navbar/>
      <div className="productContainer">
        <div className="product">
          <div className="leftDiv">
            {obj.leftData && obj.leftData.map((ele)=>{
              return(
                <>
                <p id="p" onClick={(e)=>{
                  obj.showData(e.target.innerText)
                  obj.setTarget(e.target.innerText)
                }}>{ele}</p>
                </>
              )
            })}
          </div>
          <div className="rightDiv">
          {obj.rightData &&
              obj.rightData.map((ele) => {
                return (
                  <ul>
                    <Link className="ulLink" to="/productDetails">
                      <li id="li"
                        onClick={(e) => {
                          obj.setListData(e.target.innerText);
                          obj.setItem(ele.title);

                        }}
                        
                      >
                        {ele.title}
                      </li>
                    </Link>
                  </ul>
                );
              })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Product