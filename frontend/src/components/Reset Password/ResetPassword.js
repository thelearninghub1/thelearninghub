import React, { Fragment, useEffect, useState } from 'react';
import './ResetPassword.css';
import Logo from '../../images/logo.png';
import { resetPasswordAction , clearErrors } from '../../actions/userActions'; 
import {useDispatch,useSelector} from 'react-redux';
import {useAlert} from 'react-alert';
import {useNavigate, useParams} from 'react-router-dom';
import Loader from '../Loader/Loader';


const ResetPassword = () => {

  const alert = useAlert();
  const dispatch = useDispatch();
  const {loading,error,success} = useSelector((state)=>state.forgotPassword);

  const {token} = useParams()

  const history = useNavigate();

  const [newPassword,setNewPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");


  const resetPasswordSubmitHandler = (e)=> {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set("newPassword",newPassword);
    myForm.set("confirmPassword",confirmPassword);

    dispatch(resetPasswordAction(token,{newPassword,confirmPassword}))
  }

  useEffect(()=>{
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      alert.success(`Password Reset Successfully`);
      history(`/`)
    }
  },[alert,history,success,error,dispatch]);
  return (
    <Fragment>
      {
        loading ? (<Loader />):(
          <Fragment>
          <div className="containerLogihUser">
                
                <section>
                 <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
                 <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 

                <div class="signin"> 
              
                 <div class="content"> 
              
                   <img src={Logo} alt="" />
                  <h2>STEAM CURRICULUM  </h2> 
                  <h2>Reset Password</h2> 
              
                  <form class="form" onSubmit={resetPasswordSubmitHandler}> 
              
                   <div class="inputBox"> 
              
                    <input type="password" required value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} /> <i>New Password</i> 
              
                   </div> 
              
                   <div class="inputBox"> 
              
                   <input type="password" required value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} /> <i>Confirm Password</i> 
              
                   </div> 
              
              
              
                   <div class="inputBox"> 
              
                    <input type="submit" value="Reset Password" /> 
              
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

export default ResetPassword