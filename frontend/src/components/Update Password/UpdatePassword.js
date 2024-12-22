import React, { Fragment, useEffect, useState } from 'react'
import Sidebar from '../Dashboard/Sidebar';
import './UpdatePassword.css';
import SearchIcon from '@mui/icons-material/Search';
import {useAlert} from 'react-alert';
import { useSelector , useDispatch } from 'react-redux';
import logo from '../../images/logo.png';
import { clearErrors , updatePasswordAction } from '../../actions/userActions';
import Loader from '../Loader/Loader';
import { UPDATE_PASSWORD_RESET } from '../../constants/userConstants';
import {useNavigate} from 'react-router-dom';


const UpdatePassword = () => {

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword , setConfirmPassword] = useState("");

  const {error:userError,user} = useSelector((state)=>state.loginUser);
  const {loading,error,success} = useSelector((state)=> state.updatePassword)
  const alert = useAlert();
  const dispatch = useDispatch();

  const history = useNavigate();


  const changePasswordSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("oldPassword",oldPassword);
    myForm.set("newPassword",newPassword);
    myForm.set("confirmPassword",confirmPassword);

    dispatch(updatePasswordAction(myForm))
  }

  

  useEffect(()=>{
    if (userError) {
      alert.error(userError)
      dispatch(clearErrors())
      
    }
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    if (success) {
      alert.success(`Password Updated successfully`)
      dispatch({
        type:UPDATE_PASSWORD_RESET
      })
      history(`/dashboard`)
    }
  },[userError,dispatch,alert,success,history,error])
  return (
     <Fragment>
      {
        loading ? (<Loader />):(
          <Fragment>
          <div className='dashboardMainContainer'>
            
        <div className="bannerContainer">
                  <div>
                  <img src={logo} alt="logo" />
                  </div>     
                  <div>
                    <b>{user && user.firstName} {user && user.lastName}</b>
                    <p><SearchIcon/></p>
                  </div>     
                    </div>
            <div className="maindashboard">
         
                <div>
                    <Sidebar />
                </div>
                <div>
                 
                   <div className="updatePasswordContainer">
              <div className="updatePasswordForm">
                <h1 className="title">Change Password</h1>
                <form onSubmit={changePasswordSubmitHandler}>
                 
                  <label>
                    <input type="password" placeholder="Please Enter Your Old Password" className="input"  value={oldPassword} onChange={(e)=>setOldPassword(e.target.value)} />
                  </label>
                  <label>
                    <input type="password" placeholder="Please Enter Your New Password" className="input" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} />
                  </label>
                  <label>
                    <input type="password" placeholder="Please Enter Your Confirm Password" className="input" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
                  </label>
                  <button type="submit" className="updatePasswordBtn">Change Password
                  </button>
                </form>
              </div>
            </div>
        
                </div>
            </div>
          </div>
        
        
        
        </Fragment>
        )
      }
     </Fragment>
  )
}

export default UpdatePassword