import React, { Fragment, useEffect } from 'react';
import logo from '../../images/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import {useAlert} from 'react-alert';
import {useSelector , useDispatch} from 'react-redux';
import AdminSidebar from './AdminSidebar';
import {DataGrid} from '@material-ui/data-grid';
import EditIcon from '@mui/icons-material/Edit';
import './AllDashboard.css';
import { allLessonActions , clearErrors } from '../../actions/lessonAction';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';

const AllLessons = () => {

  const {error:userError,user} = useSelector((state)=>state.loginUser);

  const {error,loading,lesson} = useSelector((state)=>state.allLessons);


  const alert = useAlert();


  const dispatch = useDispatch();


  const columns = [
    {
     field:"id",
     headerName:"Lesson ID",
     minWidth:555,
     flex:2.5
    },
   {
    field:"name",
    headerName:"Lesson Name",
    minWidth:450,
    flex:1
  },
  {
    field:"actions",
    headerName:"Actions",
    flex:0.3,
    minWidth:200,
    sortable:false,
    renderCell:(params)=>{
      return (
        <Fragment>
       
          <Link to={`${params.getValue(params.id,"id")}`} >
            <EditIcon/>
          </Link>
        </Fragment>
      )
    }
  }
];

const rows = [];

lesson && lesson.map((less) =>(
  rows.push({
    id: less._id,
    name: less.name,

  })
))


  useEffect(()=>{
    if (userError) {
        alert.error(userError);
        dispatch(clearErrors());
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(allLessonActions())
 
  },[userError,alert,dispatch,error])
  return ( <Fragment>
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
                  <AdminSidebar />
              </div>
              <div>
              <div className="productListContainer">
                <h1 id='productListHeading'>ALL Lessons Data</h1>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={10}
                  disableSelectionOnClick
                  className='productListTable'
                  autoHeight
                />
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
       

export default AllLessons