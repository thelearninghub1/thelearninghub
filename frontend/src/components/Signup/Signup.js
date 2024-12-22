import React, { Fragment, useEffect, useState } from 'react';
import './Signup.css';
import { registerUserAction , clearErrors } from '../../actions/userActions';
import {useDispatch , useSelector} from 'react-redux';
import {useAlert} from 'react-alert';
import Loader from '../Loader/Loader';
import {useNavigate} from 'react-router-dom';
import MetaData from '../MetaData/MetaData';

const Signup = () => {
  const dispatch = useDispatch();
  const {loading,error,isAuthenticatedUser} = useSelector((state)=>state.loginUser);
  const [avatarPreview , setAvatarPreview] = useState("/Profile.png");
  const [avatar, setAvatar] = useState("/Profile.png");

  const alert = useAlert();
  const history = useNavigate();

  const [user,setUser] = useState({
    email:"",
    password:"",
    address:"",
    institute:"",
    firstName:"",
    lastName:"",
    gender:"",
    qualification:"",
    curriculumTeaching:"",
    identification:"",
    phoneNo:"",
    classTeaching:"",


  })

  const {
    firstName, 
    lastName , 
    phoneNo , 
    classTeaching , 
    identification , 
    curriculumTeaching , 
    qualification , 
    gender,
    email, 
    password, 
    address , 
    institute 
  } = user;




  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      }

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({...user,[e.target.name]:e.target.value});
      
    }
  };


  const registerSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("firstName",firstName);
    myForm.set("lastName",lastName);
    myForm.set("gender",gender);
    myForm.set("qualification",qualification);
    myForm.set("curriculumTeaching",curriculumTeaching);
    myForm.set("identification",identification);
    myForm.set("phoneNo",phoneNo);
    myForm.set("classTeaching",classTeaching);

    myForm.set("email",email);
    myForm.set("password",password);
    myForm.set("avatar",avatar);
    myForm.set("address",address);
    myForm.set("institute",institute);

    dispatch(registerUserAction(myForm))
  };


  useEffect(()=>{
    if (error) {
      alert.error(error);
      dispatch(clearErrors())
    };
    if (isAuthenticatedUser) {
      history(`/dashboard`)
    }
  },[error,alert,dispatch,isAuthenticatedUser,history])
  
  return (
    <Fragment>
      {
        loading ? (<Loader/>):(
          <Fragment>
            <MetaData title={`TLH - Sign-up`} />
          <div className="containerSignupUser">
                 
                 <section>
       <span></span><span></span><span></span><span></span><span></span><span></span>  <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span> <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>   <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>  <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
        
                 <div className="signup"> 
               
                  <div className="signup-content"> 
               
                   <h2>STEAM CURRICULUM  </h2> 
                   <h2>Sign Up</h2> 
               
                   <form className="signupForm" encType='multipart/form-data' onSubmit={registerSubmitHandler}> 
               
                     <div className="sign-up-container">
                     <div className="signupInput"> 
               
               <input type="text" required value={firstName} name='firstName' onChange={registerDataChange} /> <i>
               First Name</i> 
         
              </div> 
              <div className="signupInput"> 
         
         <input type="text" required value={lastName} name='lastName' onChange={registerDataChange} /> <i>
         Last Name</i> 
   
        </div> 
                     </div>

                     <div className="sign-up-container">
                    
                    <div className="signupInput"> 
               
                     <input type="email" name='email' required value={email} onChange={registerDataChange}/> <i>
                     Your Email</i> 
               
                    </div> 
                    <div className="signupInput"> 
               
               <input type="text" required value={institute} onChange={registerDataChange} name='institute' /> <i>
                Institute Name</i> 
         
              </div> 
              </div>
              <div className="sign-up-container">

              <div className="signupInput"> 
               
               <input type="text" required value={curriculumTeaching} onChange={registerDataChange} name='curriculumTeaching' /> <i>
               Curriculum Name</i> 
         
              </div> 
              <div className="signupInput"> 
               
               <input type="text" required value={gender} onChange={registerDataChange} name='gender' /> <i>
                Your Gender</i> 
         
              </div> 
              </div>
              <div className="sign-up-container">

              <div className="signupInput"> 
               
               <input type="text" required value={qualification} onChange={registerDataChange} name='qualification' /> <i>
                Your Qualification</i> 
         
              </div> 
              <div className="signupInput"> 
               
               <input type="text" required value={identification} onChange={registerDataChange} name='identification' /> <i>
                 National ID/Passport Number</i> 
         
              </div> 
              </div>
              <div className="sign-up-container">

              <div className="signupInput"> 
               
               <input type="text" required value={classTeaching} onChange={registerDataChange} name='classTeaching' /> <i>
                Your Teaching Grade </i> 
         
              </div>
              <div className="signupInput"> 
               
               <input type="text" required value={address} onChange={registerDataChange} name='address'/> <i>
              Home Address</i> 
         
              </div> 
              </div>
              <div className="sign-up-container">


              <div className="signupInput"> 
               
               <input type="text" required value={phoneNo} onChange={registerDataChange} name='phoneNo'/> <i>
                Your Phone Number</i> 
         
              </div> 
               
                    <div className="signupInput"> 
               
                     <input type="password" required name='password' value={password} onChange={registerDataChange} /> <i>Create Password</i> 
               
                    </div> 

</div>
                    <div className=" signupInput newSignupFields" id='avatarPreview'> 
                   
                   <img 
                   src={avatarPreview} 
                   alt="Avatar Preview" 
                   className='avatarImage' />
                   
                   <input 
                   type="file"
                  name="avatar" 
                  accept='image/*'
                  onChange={registerDataChange}
                   />
                   
         
              </div> 
                  
               
                    <div className="signupInput newSignupFields"> 
               
                     <input type="submit" value="Signup" /> 
               
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

export default Signup