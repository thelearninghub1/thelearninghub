import React, { Fragment, useEffect, useState } from 'react';
import './Lessons.css';
import Sidebar from '../Dashboard/Sidebar';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../images/logo.png';
import {  useDispatch,useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { allFilterLessonActions , clearErrors } from '../../actions/lessonAction';
import { useAlert } from 'react-alert';
import Loader from '../Loader/Loader';
import  Pagination  from 'react-js-pagination';

const Lessons = () => {


  const dispatch = useDispatch();
  const {user} = useSelector((state)=>state.loginUser);
  const {loading,error,lesson,resultPerPage,lessonsCount} = useSelector((state)=>state.allLessons);
  const alert = useAlert();
  const [currentPage, setCurrentPage] = useState(1)



useEffect(()=>{
  if (error) {
    alert.error(error);
    dispatch(clearErrors());
  }
  dispatch(allFilterLessonActions(currentPage));
},[error,alert,dispatch,currentPage]);

const setCurrentPageNo = (e) => {
  setCurrentPage(e)
}
  return (
     <Fragment>
      {
        loading ? (<Loader />):(
            <Fragment>
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
            <Sidebar />
        </div>
        <div>
           <div className='miniProfileContainer'>
           <div className='myProfile'>
                <h1>Lessons</h1>
            </div>
            <div className='myProfileBtn'>
            </div>
           </div>
           <div className="category-grid">

           {lesson.map((category) => (

    <Link to={`/lesson/${category._id}`} className='lessonboxContainer'>
  
        <div
          key={category.name}
          className="category-item" 
        > 

          <img src={category.avatar && category.avatar.url} alt='avatar' className="category-icon" />
          <div className="category-name">{category.name}</div>
          </div>
        </Link>
      ))}
           </div>

    </div>
</div>

<div className="paginationContainer">
     <Pagination 
           activePage={currentPage}
           itemsCountPerPage = {resultPerPage}
           totalItemsCount={lessonsCount}
           onChange={setCurrentPageNo}
           nextPageText = ">"
           lastPageText={">>"}
           prevPageText={"<"}
           firstPageText={"<<"}
           itemClass = "page-item"
           linkClass='page-link'
           activeClass='pageItemActive'
           activeLinkClass='pageLinkActive'
     />
</div>

</div>




</Fragment>
        )
      }
     </Fragment>
  )
}

export default Lessons