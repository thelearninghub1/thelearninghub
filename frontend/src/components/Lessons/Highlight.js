import React, { Fragment , useEffect } from 'react'
import Sidebar from '../Dashboard/Sidebar';
import { useSelector , useDispatch } from 'react-redux';
import SearchIcon from "@mui/icons-material/Search"
import logo from '../../images/logo.png';
import './Highlight.css';
import { Link , useParams } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import { clearErrors , lessonDetailsAction } from '../../actions/lessonAction';
import { useAlert } from 'react-alert';
import Loader from '../Loader/Loader';

const Highlight = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const {loading,error,lesson} = useSelector((state) =>state.lessonDetails);
  const {user} = useSelector((state)=>state.loginUser);

  const {id} = useParams()


  useEffect(() =>{
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(lessonDetailsAction(id))
  },[error,alert,dispatch,id]);
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
                    <h1>Forces</h1>
                </div>
             <div className="lesson-details1">
                <Link to={`/lesson/${lesson._id}`}>Content</Link>
                <Link to={`/handouts/${lesson._id}`}>Handouts</Link>
                <Link to={`/video/${lesson._id}`}>Videos</Link>
                <Link to={`/games/${lesson._id}`}>Games</Link>
                <Link to={`/highlights/${lesson._id}`}>Highlights</Link>
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