import React, { Fragment, useEffect } from 'react';
import logo from '../../images/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import {useAlert} from 'react-alert';
import {useSelector , useDispatch} from 'react-redux';
import {DataGrid} from '@material-ui/data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { allLessonActions , clearErrors , deleteLessonAction } from '../../actions/lessonAction';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';
import SuperSidebar from './SuperSidebar';
import { Button } from '@mui/material';
import { DELETE_LESSON_RESET } from '../../constants/lessonConstants';
import { useNavigate } from 'react-router-dom';

const SuperAllLessons = () => {

  const {error:userError,user} = useSelector((state)=>state.loginUser);

  const {error,loading,lesson} = useSelector((state)=>state.allLessons);

  const {error:deleteError,message,success} = useSelector((state)=>state.deleteLesson);


  const history = useNavigate();
  const alert = useAlert();


  const dispatch = useDispatch();

  const deleteSubmitHandler = (id) => {
    dispatch(deleteLessonAction(id))
  };


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
          <Button onClick={()=>deleteSubmitHandler(`${params.getValue(params.id,"id")}`)}>
            <DeleteIcon />
          </Button>
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
    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }
    if (success) {
      alert.success(message);
      history(`/super-admin-panel`)
      dispatch({
        type:DELETE_LESSON_RESET
      })
    }

    dispatch(allLessonActions())
 
  },[userError,alert,dispatch,error,deleteError,history,success,message])
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
                  <SuperSidebar />
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
       

export default SuperAllLessons