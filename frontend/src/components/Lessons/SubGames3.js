import React, { Fragment , useEffect } from 'react'
import Sidebar from '../Dashboard/Sidebar';
import { useSelector , useDispatch } from 'react-redux';
import SearchIcon from "@mui/icons-material/Search"
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import './SubVideo.css';
import { lessonDetailsAction , clearErrors } from '../../actions/lessonAction';
import { useAlert } from 'react-alert';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';



const SubGames3 = () => {
  const {user} = useSelector((state)=>state.loginUser);
  const alert = useAlert();
  const dispatch = useDispatch();
  const {loading,error,lesson} = useSelector((state) =>state.lessonDetails);
  const {id} = useParams();
  

  useEffect(() =>{
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(lessonDetailsAction(id))
  },[error,dispatch,alert,id]);
  return (
      <Fragment>
        {
          loading ? (<Loader />) : (
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
                        <h1>{lesson && lesson.name}</h1>
                    </div>
                 <div className="lesson-details1">
                    <Link to={`/lesson/${lesson._id}`}>Content</Link>
                    <Link to={`/handouts/${lesson._id}`}>Handouts</Link>

                    <Link to={`/video/${lesson._id}`}>Videos</Link>
                    <Link to={`/games/${lesson._id}`}>Games</Link>
                    <Link to={`/highlights`}>Highlights</Link>
                 </div>
                <div className="lesson-container">
                 <div className='mylesson'>
                        <h2>LINKED GAMES</h2>
                 </div>
                <div className='subVideoContainer'>
                    <div>
                    <iframe width="700" height="700" src={lesson && lesson.game3Link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen   />
               
        
                      <h2>{lesson && lesson.game3Name}</h2>
                    </div>
                    <div className='subvideos-detailsContainer'>
                  
                    <Link to={`/sub-game/${lesson._id}`}>
                    <iframe width="200" height="150" src={lesson && lesson.game1Link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen   />
                        
                    <Link to={`/sub-game/${lesson._id}`}>{lesson && lesson.game1Name}</Link>
                    </Link>
                    <Link to={`/sub-game2/${lesson._id}`}>
                    <iframe width="200" height="150" src={lesson && lesson.game2Link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen   />
                        
                    <Link to={`/sub-game2/${lesson._id}`}>{lesson && lesson.game2Name}</Link>
                    </Link>
                    <Link to={`/sub-game4/${lesson._id}`}>
                    <iframe width="200" height="150" src={lesson && lesson.game4Link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen   />
                        
                    <Link to={`/sub-game4/${lesson._id}`}>{lesson && lesson.game4Name}</Link>
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
      </Fragment>
     )
}

export default SubGames3