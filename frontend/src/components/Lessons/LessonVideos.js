import React, { Fragment, useEffect } from 'react'
import Sidebar from '../Dashboard/Sidebar';
import { useSelector , useDispatch } from 'react-redux';
import SearchIcon from "@mui/icons-material/Search"
import logo from '../../images/logo.png';
import { Link, useParams } from 'react-router-dom';
import './LessonVideos.css';
import { lessonDetailsAction , clearErrors } from '../../actions/lessonAction';
import { useAlert } from 'react-alert';
import Loader from '../Loader/Loader';

const LessonVideos = () => {
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
                <h2>IN THIS LESSON</h2>
         </div>
         <div className='videos-detailsContainer'>
            <Link to={`/sub-video/${lesson._id}`}>
            <iframe width="200" height="150" src={lesson && lesson.video1Link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen   />
                
            <Link to={`/sub-video/${lesson._id}`}>{lesson && lesson.video1Name}</Link>
            </Link>
            <Link to={`/sub-video2/${lesson._id}`}>
            <iframe width="200" height="150" src={lesson && lesson.video2Link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen   />
                
            <Link to={`/sub-video2/${lesson._id}`}>{lesson && lesson.video2Name}</Link>
            </Link>
            <Link to={`/sub-video3/${lesson._id}`}>
            <iframe width="200" height="150" src={lesson && lesson.video3Link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen   />
                
            <Link to={`/sub-video3/${lesson._id}`}>{lesson && lesson.video3Name}</Link>
            </Link>
            <Link to={`/sub-video4/${lesson._id}`}>
            <iframe width="200" height="150" src={lesson && lesson.video4Link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen   />
                
            <Link to={`/sub-video4/${lesson._id}`}> {lesson && lesson.video4Name}</Link>
            </Link>
            <Link to={`/sub-video5/${lesson._id}`}>
            <iframe width="200" height="150" src={lesson && lesson.video5Link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen   />
                
            <Link to={`/sub-video5/${lesson._id}`}>{lesson && lesson.video5Name}</Link>
            </Link>
            <Link to={`/sub-video6/${lesson._id}`}>
            <iframe width="200" height="150" src={lesson && lesson.video6Link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen   />
                
            <Link to={`/sub-video6/${lesson._id}`}>{lesson && lesson.video6Name}</Link>
            </Link>
        
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

export default LessonVideos