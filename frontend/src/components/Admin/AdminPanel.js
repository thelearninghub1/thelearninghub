import React, { Fragment, useEffect } from 'react';
import './AdminPanel.css';
import logo from '../../images/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import {useAlert} from 'react-alert';
import {useSelector , useDispatch} from 'react-redux';
import { clearErrors } from '../../actions/userActions';
import AdminSidebar from './AdminSidebar';
import { Link } from 'react-router-dom';
import MetaData from '../MetaData/MetaData';


const AdminPanel = () => {

  const {error:userError,user} = useSelector((state)=>state.loginUser);

  const alert = useAlert();

  const dispatch = useDispatch();


  useEffect(()=>{
    if (userError) {
        alert.error(userError);
        dispatch(clearErrors());
    }
  },[userError,alert,dispatch])
  return (
    <Fragment>
      <MetaData title={`TLH - Admin Panel`} />
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
              <AdminSidebar />
          </div>
          <div>
           
          <div className='dashboardContainer' >
               <div className="dashboardSummary">
                 <div>
                   <p>
                     Total Team Members <br /> 10 </p>
                 </div>
                 <div className="dashboardSummaryBox2">
                   <Link>
                   <p>Admins</p>
                   <p>2</p>
                   </Link>
                   <Link  >
                     <p> Standards</p>
                     <p>5</p>
                   </Link>
                   <Link >
                     <p>Lessons</p>
                     <p>4</p>
                   </Link>
                 </div>
               </div>
            
               </div>
  
          </div>
      </div>
    </div>
  
  
  
  </Fragment>
    )
}

export default AdminPanel