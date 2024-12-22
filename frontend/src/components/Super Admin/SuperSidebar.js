import React, { Fragment, useEffect, useState } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { logoutUser , clearErrors } from '../../actions/userActions';
import {useDispatch , useSelector} from 'react-redux';
import {useAlert} from 'react-alert';
import Loader from '../Loader/Loader';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import {TreeView,TreeItem} from '@material-ui/lab';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import PagesIcon from '@mui/icons-material/Pages';

const SuperSidebar = () => {

    const history = useNavigate();

    const dispatch = useDispatch();
    const {loading,error  } = useSelector((state)=>state.loginUser);
    const alert = useAlert();

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
      };

      const logoutUserHandler = () => {
        dispatch(logoutUser())
        alert.success("Logged Out successfully")
        history(`/`)

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
                <div className="sidebarr">
          
          <Link to={"/dashboard"} title='Dashboard'>
                  <p>
                      <DashboardIcon/> 
                  </p>
              </Link>
             
              <Link>
            <TreeView
            defaultCollapseIcon={<DashboardCustomizeIcon/>}
            defaultExpandIcon={<DashboardCustomizeIcon/>}
            >
            <TreeItem nodeId='1' title='All Dashboard Data' >
            <Link to={"/super-admin/dashboards"}>
            <TreeItem nodeId='2'  icon={<SpaceDashboardIcon/>}  />
            </Link>
            <Link to={"/super-admin/dashboard/create"} title='Create Dashboard'>
                <TreeItem nodeId='3'  icon={<AddIcon/>}  />
            </Link>
            </TreeItem>
            </TreeView>
        </Link>
          
       
          
        <Link to={`/super-admin/users`} title='All Users Data '>
               <p>
                      <PeopleAltIcon/> 
               </p>
              </Link>

              <Link>
            <TreeView
            defaultCollapseIcon={<CastForEducationIcon/>}
            defaultExpandIcon={<CastForEducationIcon/>}
            >
            <TreeItem nodeId='1' title='Lessons Data' >
            <Link to={"/super-admin/lessons"}>
            <TreeItem nodeId='2'  icon={<SpaceDashboardIcon/>} />
            </Link>
            <Link to={"/super-admin/lesson/create"}>
                <TreeItem nodeId='3'  icon={<AddIcon/>} title='Create Lesson' />
            </Link>
            </TreeItem>
            </TreeView>
        </Link>



        <Link>
            <TreeView
            defaultCollapseIcon={<PagesIcon/>}
            defaultExpandIcon={<PagesIcon/>}
            >
            <TreeItem nodeId='1' title='Activities' >
            <Link to={"/super-admin/activities"}>
            <TreeItem nodeId='2'  icon={<SpaceDashboardIcon/>} />
            </Link>
            <Link to={"/super-admin/activity/create"}>
                <TreeItem nodeId='3'  icon={<AddIcon/>} title='Create Activity' />
            </Link>
            </TreeItem>
            </TreeView>
        </Link>
          
            
              <Link  onClick={logoutUserHandler} title='Logout'>
               <p>
                      <ExitToAppIcon/> 
               </p>
              </Link>
            
            
             
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

export default SuperSidebar