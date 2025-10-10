import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { Appctx } from "../../App";
import Model from "../../components/Model/Model";
import { useDispatch } from "react-redux";
import { login } from "../../components/slice/userDetails";

const Login = () => {
  const OnModelClose = () =>{
      setShowSuccessMessage(false);
    }
 const navigate = useNavigate();
  const [showSuccessMessage,setShowSuccessMessage] = useState(false);
          // const ctx=useContext(Appctx);
          const dispatch = useDispatch();

    const onLogin = (e) =>{    
      e.preventDefault();
      const password = e.target.password.value;

      const userName =e.target.name.value;
      console.log(password,userName);
      if(password ==='1234' && userName ==='Allu'){
      // ctx.setState({...ctx.state, isLoggedIn : true});
        
        dispatch(login());
      setShowSuccessMessage(true);

      setTimeout(() => {
      // navigate("/dashboard");
      }, 2000);

        
      //  navigate("/dashboard");
        
       // confirm("logined successfully");
      }else{
        alert("please provide vaid credentials");
      }
    }
    
  return (
    <div>
      <form onSubmit={onLogin}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" >
            
          </input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" name="password" id="password"></input>
          
        </div>
        <input type="submit" value="login"></input>
      </form>
      {showSuccessMessage && <Model onClose = {OnModelClose} />}
    </div>
  );
};
export default Login;
