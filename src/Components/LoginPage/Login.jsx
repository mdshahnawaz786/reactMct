import React, { useState } from 'react'
import './login.css'
import {Link,useNavigate} from "react-router-dom"


const Login = ({showPage , setShowPage}) => {

    // const [validate, setValidate] = useState(false)
    // let navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [homePath, setHomePath] = useState("/home");
    const [loginPath, setLoginPath] = useState("/login");
  

    const checkDetails = () => {
        let symbol1 = 0;
        let symbol2 = 0;
        if (email === "" || password === "" || email.length <13) {
    
          return false;
        }
        console.log(email, password);
        for (let i = 0; i < email.length; i++) {
          let ch = email.charAt(i);
          if (ch === ".") {
            symbol1++;
          } else if (ch === "@") {
            symbol2++;
          }
        }
        if (symbol1 !== 1 || symbol2 !== 1) {
          
          return false;
        }
    
        return true;
      };


  return (
    <>
    <div className="loginMain">
        <div className="left">
            <br /><br />
            <div className="headerDiv">
            <h1>Welcome back to</h1>
            <h1>Pretty Login</h1><br />
            <p>Its great to have you back!</p><br />
            <h3>Email:</h3>
            <input  type="text" placeholder="abc@gmail.com" onChange={(e) => {
              setEmail(e.target.value);
            }}/><br />
            <h3>Password:</h3>
            <input type="password" placeholder="Abcd@1234" onChange={(e) => {
              setPassword(e.target.value);
            }}/><br />
            </div>
            <div className="checkDiv">
                <div className="rememberDiv">
                <input type="checkbox" name="" id="" />
                <p>Remember me?</p>
                </div>
                <div className="forgetPasDiv">
                    <p>Forgot password?</p>
                </div>
            </div>
            <div className="buttonDiv">
            <Link className='loginLinkButton'
            onClick={() => {
              if (checkDetails()) {
                setShowPage(true);
               
              } else {
                setShowPage(false);
               alert("Enter User Id and Password");
                return;
              }
            }}
            to={checkDetails() ? homePath : loginPath}
          >
            <button className='loginLinkButtonb'>LOGIN</button>
          </Link>
                <button>CREATE ACCOUNT</button>
            </div>
            <div className="orDiv">
                <p>Or login with</p>
            </div>
            <div className="lastDiv">
                <h4>Facebook</h4>
                <h4>Google</h4>
            </div>
        </div>



        <div className="right">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqQap8cn_RmcgTu6tLEDw_f3uKV2K9xTHDNlYpLvnVnQ&usqp=CAU&ec=48600113" alt="" />
        </div>
    </div>
    </>
  )
}

export default Login
