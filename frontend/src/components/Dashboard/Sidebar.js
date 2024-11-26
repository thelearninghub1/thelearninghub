import React, { Fragment, useEffect, useState } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import "./Sidebar.css";
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SchoolIcon from '@mui/icons-material/School';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { logoutUser , clearErrors } from '../../actions/userActions';
import {useDispatch , useSelector} from 'react-redux';
import {useAlert} from 'react-alert';
import Loader from '../Loader/Loader';
import { useNavigate } from 'react-router-dom';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import {SpeedDial,SpeedDialAction} from '@material-ui/lab';
import { makeStyles } from "@material-ui/core/styles";


const Sidebar = () => {

    const [open , setOpen] = useState(true);

    const options = [
        {icon:<DashboardIcon style={{color:"white",fontSize:"30px"  , marginBottom:"60px" , marginRight:"45px" }}  />,func:dashboardFunc , name:"dashboard"},
        {icon:<SchoolIcon style={{color:"white",fontSize:"30px"  , marginBottom:"60px" , marginRight:"45px"}} />, func:lessonFunc , name:"lessons"},
        {icon:<PersonIcon style={{color:"white",fontSize:"30px"  , marginBottom:"60px" , marginRight:"45px"}} />,func:myProfileFunc , name:"profile"},
        {icon:<SettingsIcon style={{color:"white",fontSize:"30px"  , marginBottom:"60px" , marginRight:"45px"}} />,func:SettingsFunc, name:"settings"},
        {icon:<ExitToAppIcon style={{color:"white",fontSize:"30px"  , marginBottom:"60px" , marginRight:"45px"}}  />,func:logoutUserHandler , name:"logout"},

    ]
 
    function lessonFunc () {
        history(`/lessons`)
    }
    function dashboardFunc () {
        history(`/dashboard`)
    }

  
    function myProfileFunc() {
        history(`/my-profile`)
    }
    function SettingsFunc() {
        history(`/settings`)
    }
    const useStyles = makeStyles({
        tooltip: {
          fontSize: 15,
          marginLeft: -1
        }
      });
      
      const classes = useStyles();


    const history = useNavigate();

    const dispatch = useDispatch();
    const {loading,error , user } = useSelector((state)=>state.loginUser);
    const alert = useAlert();

    const [showMenu, setShowMenu] = useState(true);

 

    function adminFunc() {
        history(`/admin-panel`)
    }

    function superFunc() {
        history(`/super-admin-panel`)
    }

    const toggleMenu = () => {
        setShowMenu(!showMenu);
      };

      function logoutUserHandler  ()  {
        dispatch(logoutUser())
        alert.success("Logged Out successfully")
        history(`/`)

      }
      if (user.role === 'admin') {
        options.unshift({
            icon:<AdminPanelSettingsIcon  style={{color:"white",fontSize:"30px"  , marginBottom:"60px" , marginRight:"45px" }} /> , func:adminFunc , name:"Admin Panel"
        })
    
    }

    if (user.role === 'super') {
        options.unshift({
            icon:<AdminPanelSettingsIcon style={{color:"white",fontSize:"30px"  , marginBottom:"60px" , marginRight:"45px" }}  /> , func:superFunc , name:"Super AdminPanel"
        })
    
    }

      useEffect(()=>{
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
     
      
      },[dispatch,error,alert]);

  return (
      <Fragment>
        {
            loading ? (<Loader />):(
                <Fragment>

        
                <div  className={showMenu ? "open sidebarMainContainer":"close sidebarMainContainer"}>
    <div className="sidebar">

    <SpeedDial
    ariaLabel='SpeedDail tooltip example'
    onClose={()=>setOpen(true)}
    onOpen={()=>setOpen(true)}
    open={open}
    direction="down"
    className='speedDail'

    >

    {options.map((item)=>(
        <SpeedDialAction
    key={item.name}
    icon={item.icon}
    tooltipTitle={item.name}
    onClick={item.func} 
    TooltipClasses={classes}

         />))}

    </SpeedDial>
   
                 
             
             
          </div>
          <div onClick={toggleMenu} className='toggleContainerBtn'>
              <ArrowBackIosNewIcon />
          </div>
                </div>
          
            
           </Fragment>
            )
        }
      </Fragment>
   )
}

export default Sidebar