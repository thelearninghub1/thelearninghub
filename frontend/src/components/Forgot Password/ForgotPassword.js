import React, { Fragment, useEffect, useState } from 'react';
import "./ForgotPassword.css";
import Logo from '../../images/logo.png';
import { forgotPasswordAction , clearErrors } from '../../actions/userActions';
import {useDispatch, useSelector} from 'react-redux';
import {useAlert} from 'react-alert';
import Loader from '../Loader/Loader';


const ForgotPassword = () => {

  const alert = useAlert();
  const dispatch = useDispatch();
  const {loading,error,message,success} = useSelector((state)=>state.forgotPassword);

  const [email,setEmail] = useState("");

  const forgotPasswordSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("email", email);

    dispatch(forgotPasswordAction(email))
  }

  useEffect(()=>{
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    };
    if (success) {
      alert.success(message);

    }
  },[error,dispatch,alert,success,message])
  return (
      <Fragment>
        {
          loading ? (<Loader />):(
            <Fragment>
            <div className="containerLogihUser">
                  
                  <section>
                   <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
                   <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 

                  <div class="forgotPassword"> 
                
                   <div class="content"> 
                
                     <img src={Logo} alt="" />
                    <h2>STEAM CURRICULUM  </h2> 
                    <h2>Forgot Password</h2> 
                
                    <form class="form" onSubmit={forgotPasswordSubmitHandler}> 
                
                     <div class="inputBox"> 
                
                      <input type="text" required name='email' value={email} onChange={(e)=>setEmail(e.target.value)} /> <i>Email</i> 
                
                     </div> 
                
                
                
                
                     <div class="inputBox"> 
                
                      <input type="submit" value="Send" /> 
                
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

export default ForgotPassword