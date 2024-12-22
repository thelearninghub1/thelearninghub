import React, { Fragment, useEffect } from 'react'
import Sidebar from '../Dashboard/Sidebar'
import './Profile.css';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../images/logo.png';
import { useDispatch , useSelector } from 'react-redux';
import { clearErrors  } from '../../actions/userActions';

const Profile = () => {
  const {error:userError,user} = useSelector((state)=>state.loginUser);

  const dispatch = useDispatch();



  useEffect(()=>{
    if (userError) {
      alert.error(userError);
      dispatch(clearErrors())
    }
  },[dispatch,userError])
  return (
    <Fragment>
     
     <div className="dashboardMainContainer">
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
               <div className='miniProfileContainer'>
               <div className='myProfile'>

                    <h4>Personal Information</h4>
                </div>
                
                <div className="profileContainer">
                  <div className='profileContainerFirst'>
                    <img src={user.avatar && user.avatar.url} alt={user.firstName }
                    />
                    <h2> {user && user.firstName} {user && user.lastName} </h2>
                    <h3> {user && user.classTeaching} Teaching Grade</h3>
                    <p>Home Address : {user && user.address}</p>
                  </div>
                  <div className="profileContainerSecond">
                    <div className="profileContainerSecondMini">
                    <h2>Basic Information</h2>

                      <div>
                        <h4>Full Name</h4>
                        <p>{user && user.firstName} {user && user.lastName}</p>
                      </div>
                      <div>
                        <h4>Email Address</h4>
                        <p>{user && user.email}</p>
                      </div>
                      <div>
                        <h4>Phone Number</h4>
                        <p>{user && user.phoneNo}</p>
                      </div>
                      <div>
                        <h4>Home Address</h4>
                        <p>{user && user.address} </p>
                      </div>
                    </div>
                    <div className="profileContainerSecondMini2">
                      <h2>Other Information</h2>
                      <div>
                        <h4>Your Qualification</h4>
                        <p>{user && user.qualification} </p>
                      </div>
                      <div>
                        <h4> Teaching Grade</h4>
                        <p>{user && user.classTeaching} </p>
                      </div>
                      <div>
                        <h4>Your Curriculum</h4>
                        <p>{user && user.curriculumTeaching} </p>
                      </div>
                      <div>
                        <h4>National ID/Passport Number</h4>
                        <p>{user && user.identification} </p>
                      </div>
                      <div>
                        <h4>Institute</h4>
                        <p>{user && user.institute} </p>
                      </div>
                      <div>
                        <h4>Your Gender</h4>
                        <p>{user && user.gender} </p>
                      </div>
                  
                      
                     
                      
                    
                    </div>
                  </div>
    </div>
            </div>
            <div className='secondProfileContainer'>
 
   

 </div>
 
            </div>
        </div>

   </div>



    



    </Fragment>
  )
}

export default Profile