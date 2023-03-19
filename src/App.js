import './App.css';
import { Routes,Route  } from 'react-router-dom';
import Login from './Components/LoginPage/Login';
import Home from './Components/Home/Home';
import Product from './Components/Product/Product';
import Users from './Components/User/Users';
import Contact from './Components/Contact/Contact';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import { createContext, useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { apiData } from "./Redux/action";



export const GlobalData = createContext();
function App() {
  const dispatch = useDispatch()
  const [showPage, setShowPage] = useState(false);
  const [leftData, setleftData] = useState("");
  const [rightData, setRightData] = useState("");
  const [listData,setListData] = useState("");
  const[item,setItem] = useState("");
  const [target,setTarget] = useState("");
  const [userData,setUserData] = useState("");


  useEffect(() => {
    leftPanel();
    showData();
    userDataFn()
  }, []);

  const leftPanel = async () => {
    const api = await fetch("https://fakestoreapi.com/products/categories");
    const res = await api.text();
    const jsonData = JSON.parse(res);
    setleftData(jsonData);
    console.log(leftData, jsonData);
  };

  const showData = async (ele) => {
    const api = await fetch(
      `https://fakestoreapi.com/products/category/${ele ? ele : "electronics"}`
    );
    const res = await api.text();
    const jsonData = JSON.parse(res);
    setRightData(jsonData);
  };


  const userDataFn = async () => {
    const api = await fetch(
      `https://randomuser.me/api/?gender=all&results=500`
    );
    const res = await api.text();
    const jsonData = JSON.parse(res);
    setUserData(jsonData);
    // console.log("hello");
    dispatch(apiData(jsonData))
  }

  const obj = {
    leftData: leftData,
    setleftData: setleftData,
    rightData: rightData,
    setRightData: setRightData,
    listData:listData,
    setListData:setListData,
    item:item,
    setItem:setItem,
    showData:showData,
    target:target,
    setTarget:setTarget,
    userData:userData,
    setUserData:setUserData,
  };

  return (
    <div className="App">
      <GlobalData.Provider value={obj}>
        <Routes>
          <Route path='/' element={<Login showPage={showPage} setShowPage={setShowPage}/>}/>
          <Route path="/login" element={<Login showPage={showPage} setShowPage={setShowPage} />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/users" element={<Users />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </GlobalData.Provider>
     
      
    
    </div>
  );
}

export default App;
