import React, { useContext, useState } from "react";
import { GlobalData } from "../../App";
import Navbar from "../Navbar/Navbar";
import './user.css'
import { useSelector } from "react-redux";
const Users = () => {

  const obj = useContext(GlobalData)

  const [gender, setGender] = useState("all");
  const [initial , seInitial] = useState(false)

  const apiData = useSelector((state) => {
    return state;
  });

  return (
    <>
    <Navbar />

    <div className="userContainer">
      <div className="headingDiv">
      <h4>Users details</h4>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda reiciendis quisquam voluptas. Nemo rem, error mollitia amet, consequuntur veritatis totam tenetur sequi laboriosam harum labore aut numquam! Voluptatem, aut  Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nam sunt amet cumque delectus harum cum facere placeat, deserunt eius quis ipsa ab. Eos sint pariatur, voluptatibus distinctio perspiciatis consectetur.</p>
      </div>
      <div className="bigRadioContainer">
          <input
            onClick={(e) => {
              setGender(e.target.value);
              seInitial(true)
              console.log(obj.userData.results);
            }}
            type="radio"
            value="all"
            name="gender"
          />
          <label>All</label>
     
          <input
            onClick={(e) => {
              setGender(e.target.value);
              seInitial(true)
              console.log(obj.userData.results);
            }}
            type="radio"
            value="male"
            name="gender"
          />
          <label>Male</label>
       
          <input
            onClick={(e) => {
              setGender(e.target.value);
              seInitial(true)
              console.log(obj.userData.results);
            }}
            type="radio"
            value="female"
            name="gender"
          />
          <label>Female</label>
      </div>
      <div className="userHeader">
        <div className="leftUser">
          <h4>Image</h4>
          <h4>Name</h4>
        </div>
        <div className="rightUser">
          <h4>Email</h4>
          <h4>Gender</h4>
        </div>
      </div>
      <div className="userInnerContainer">
        {initial &&
          obj.userData.results.map((ele) => {
            if (ele.gender === gender) {
              console.log(ele);
              return (
                <>
                  <div className="genderDataContainer">
                    <div className="leftUserGender">
                      <img src={ele.picture.medium} alt="Hello" />
                      <h4>{ele.name.first}</h4>
                    </div>
                    <div className="rightUserGender">
                      <h4>{ele.email}</h4>
                      <h4>{ele.gender}</h4>
                    </div>
                  </div>
                </>
              );
            } else if (gender === "all") {
              return (
                <>
                  <div className="genderDataContainer">
                    <div className="leftUserGender">
                      <img src={ele.picture.medium} alt="Hello" />
                      <h4>{ele.name.first}</h4>
                    </div>
                    <div className="rightUserGender">
                      <h4>{ele.email}</h4>
                      <h4>{ele.gender}</h4>
                    </div>
                  </div>
                </>
              );
            }
          })}
      </div>
    </div>
    </>
  )
}

export default Users