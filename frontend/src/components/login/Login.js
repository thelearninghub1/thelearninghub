import React, { Fragment, useEffect, useState } from 'react'
import './Login.css';
import { Link , useNavigate  } from 'react-router-dom';
import Logo from '../../images/logo.png';
import { loginUserAction , clearErrors } from '../../actions/userActions';
import {useDispatch , useSelector} from 'react-redux';
import {useAlert} from 'react-alert';
import Loader from '../Loader/Loader';
import MetaData from '../MetaData/MetaData';



const Login = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");


  const dispatch = useDispatch();
  const history = useNavigate();

  const {loading,error,isAuthenticatedUser} = useSelector((state)=>state.loginUser);
  const alert = useAlert();


  const loginSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("email",email);
    myForm.set("password",password);

    dispatch(loginUserAction(email,password));
  }

  useEffect(()=>{

    if (error) {
      alert.error(error);
      dispatch(clearErrors())
    };
  
    if (isAuthenticatedUser) {
      alert.success(`Login Successfully`);
      history(`/dashboard`)
    }

  },[alert,dispatch,error,history,isAuthenticatedUser]);
  return (
     <Fragment>
      {
        loading ? (<Loader/>) : ( 
          <Fragment>
            <MetaData title={` TLH - Login`} />
          <div className="containerLogihUser">
                 
        <section>
         <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
         <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 

        <div className="signin"> 
      
         <div className="content"> 
      
           <div>
           <img src={Logo} alt="" />
           </div>
          <h2>Interdicipilinary CURRICULUM  </h2> 
          <h2>Sign In</h2> 
      
          <form className="form" onSubmit={loginSubmitHandler}> 
      
           <div className="inputBox"> 
      
            <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)}/> <i>Username</i> 
      
           </div> 
      
           <div className="inputBox"> 
      
            <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)} /> <i>Password</i> 
      
           </div> 
      
           <div className="links"> <Link to={`/password/forgot`}>Forgot Password</Link> <Link to={`/sign-up`}>Signup</Link> 
      
           </div> 
      
           <div className="inputBox"> 
      
            <input type="submit" value="Login" /> 
      
           </div> 
      
          </form> 
      
         </div> 
      
        </div> 
      
       </section></div> 
          </Fragment>
        )
      }
     </Fragment>
    )
}

export default Login