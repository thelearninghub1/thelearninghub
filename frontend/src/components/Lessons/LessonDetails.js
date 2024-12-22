import React, { Fragment, useEffect } from 'react'
import Sidebar from '../Dashboard/Sidebar';
import { useDispatch,useSelector } from 'react-redux';
import SearchIcon from "@mui/icons-material/Search"
import logo from '../../images/logo.png';
import './LessonDetails.css';
import { Link, useParams } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { clearErrors , lessonDetailsAction } from '../../actions/lessonAction';
import Loader from '../Loader/Loader';


const LessonDetails = () => {
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
                        <h2>Explore</h2>
                 </div>
                 <div className='lesson-detailsContainer'>
                    <div>
                    <img src={lesson.content1Image && lesson.content1Image.url} alt="content 1" />
                    <Link to={`/content/${lesson._id}`}>{lesson && lesson.content1Name}</Link>
                    </div>
                    <div>
                    <img src={lesson.content2Image && lesson.content2Image.url} alt="content 2" />
        
                    <Link to={`/content2/${lesson._id}`}>{lesson && lesson.content2Name}</Link>
                    </div>
                    <div>
                    <img src={lesson.content3Image && lesson.content3Image.url} alt="content 3" />
        
                    <Link to={`/content3/${lesson._id}`}>{lesson && lesson.content3Name}</Link>
                    </div>
                    <div>
                    <img src={lesson.content4Image && lesson.content4Image.url} alt="content 4" />
        
                    <Link to={`/content4/${lesson._id}`}>{lesson && lesson.content4Name}</Link>
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

export default LessonDetails