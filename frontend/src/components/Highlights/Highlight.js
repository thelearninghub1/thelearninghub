import React, { Fragment , useEffect } from 'react'
import Sidebar from '../Dashboard/Sidebar';
import { useSelector , useDispatch } from 'react-redux';
import SearchIcon from "@mui/icons-material/Search"
import logo from '../../images/logo.png';
import './Highlight.css';
import { Link } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import { clearErrors  } from '../../actions/lessonAction';
import { useAlert } from 'react-alert';
import Loader from '../Loader/Loader';
import SocialMedia from './SocialMedia.js';
import { allHighlightsAction } from '../../actions/highlightActions.js';

const Highlight = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const {user,loading,error} = useSelector((state)=>state.loginUser);
  const {error:highError,highlights} = useSelector((state)=>state.allHightlights);






  useEffect(() =>{
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (highError) {
      alert.error(highError);
      dispatch(clearErrors());
    }
    dispatch(allHighlightsAction())
  },[error,alert,dispatch,highError]);
  return (
  <Fragment>
    {
      loading ? (<Loader />):(
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
    
           {
           /*    ----------Banner---------- */
    
           }
    
    
             <div className="maindashboard">
             <div>
                   <Sidebar />
                   
             </div>
             
    
             <div className='lessonDetailsContainer'>
             <div className='myProfile'>
                    <h1>Social Media</h1>
                </div>
             <div className="lesson-details1">
                <Link to={`/lessons`}>Content</Link>
                <Link to={`/lessons`}>Handouts</Link>
                <Link to={`/lessons`}>Videos</Link>
                <Link to={`/lessons`}>Games</Link>
                <Link to={`/highlights`}>Highlights</Link>
             </div>
            <div className="lesson-container">
            <div className="highlightContainer">
             <div>
             <LeaderboardIcon />
             <p>Activity Remarks </p>
             </div>     
             <div>
               <b><AccountCircleIcon /></b>
               <b><AccountCircleIcon /></b>
               <b><AccountCircleIcon /></b>
               <p><MoreHorizIcon/></p>
             </div>     
           </div>
           <div>
            {
           highlights && highlights.map((details) => (
            <SocialMedia details={details} />
           ))
            }

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

export default Highlight