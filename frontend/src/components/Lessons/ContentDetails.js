import React, { Fragment , useEffect } from 'react'
import Sidebar from '../Dashboard/Sidebar';
import { useSelector , useDispatch } from 'react-redux';
import SearchIcon from "@mui/icons-material/Search"
import logo from '../../images/logo.png';
import './LessonDetails.css';
import { Link , useParams } from 'react-router-dom';
import subContentpdf from '../../images/subcontentpdf.svg';
import './ContentDetails.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { clearErrors , lessonDetailsAction } from '../../actions/lessonAction';
import Loader from '../Loader/Loader';
import { useAlert } from 'react-alert';



const ContentDetails = () => {

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
                   
          
                   <div className='contentDetailsContainer'>
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
                  <div className="content-container">
                   <div className='mylesson'>
                          <h2>{lesson && lesson.content1Name}</h2>
                   </div>
                   <p className='content-p'>in this lesson you will learn</p>
          
                   <div className='content-content'>
                   <div className='content-detailsContainer'>
                      <div>
                      <img src={lesson.contentSub1Image && lesson.contentSub1Image.url} alt="" />
                      <Link>{lesson && lesson.contentSub1Name}</Link>
                      </div>
                      <div>
                      <img src={lesson.contentSub2Image && lesson.contentSub2Image.url} alt="" />
          
                      <Link >{lesson && lesson.contentSub2Name}</Link>
                      </div>
                      <div>
                      <img src={lesson.contentSub3Image && lesson.contentSub3Image.url} alt="" />
          
                      <Link >{lesson && lesson.contentSub3Name}</Link>
                      </div>
                       <div>
                       <img src={lesson.contentSub4Image && lesson.contentSub4Image.url} alt="" />
          
                      <Link >{lesson && lesson.contentSub4Name}</Link>
                      </div>
                      <div>
                      <img src={lesson.contentSub5Image && lesson.contentSub5Image.url} alt="" />
          
                      <Link >{lesson && lesson.contentSub5Name}</Link>
                      </div>
                   </div>
                   <div className='content-secondContainer'>
                   <div className='content-card'>
                    <div>
                      <AccessTimeIcon />
                      <h3>Estimated Time</h3>
                      
                    </div>
                          <h2>{lesson && lesson.subContentTime}</h2>
                        <a href={lesson && lesson.SubContentanswerKey} target='blank'>ANSWER KEYS</a>
                        <h3>Teacher Resources</h3>
                        <a href={lesson && lesson.SubContentclassRoomLink} target='blank'>Class Room Slide</a>
                        <a href={lesson && lesson.SubContentStandard} target='blank'>Standards Allignments</a>
          
                       </div>
                     </div>
                   </div>
                   <div className='content-pdfdownloadContainer'>
                      <img src={subContentpdf} alt="" />
          
                      <a href="www.google.com"> Lesson Implementation</a>
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

export default ContentDetails