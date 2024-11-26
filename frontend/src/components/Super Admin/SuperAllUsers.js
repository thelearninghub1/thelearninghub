import React, { Fragment, useEffect } from 'react';
import logo from '../../images/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import {useAlert} from 'react-alert';
import {useSelector , useDispatch} from 'react-redux';
import { clearErrors , superAllUserAction , deleteUserAction  } from '../../actions/userActions';
import {DataGrid} from '@material-ui/data-grid';
import Loader from '../Loader/Loader.js';
import SuperSidebar from './SuperSidebar.js';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link , useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { DELETE_USER_RESET } from '../../constants/userConstants.js';




const SuperAllUsers = () => {

  const {error:userError,user} = useSelector((state)=>state.loginUser);
  const {loading,error,users} = useSelector((state)=>state.allUsers);
  const {error:deleteUser,success , message} = useSelector((state)=>state.updatePassword);



  const alert = useAlert();

  const history = useNavigate();


  const dispatch = useDispatch();

  const deleteSubmitHandler = (id) => {
    dispatch(deleteUserAction(id))

  }


  const columns = [
    {
     field:"id",
     headerName:"Teacher ID",
     minWidth:300,
     flex:2.5
    },
   {
    field:"name",
    headerName:"Teacher Name",
    minWidth:250,
    flex:1
  },
  {
    field:"role",
    headerName:"Teacher Role",
    minWidth:250,
    flex:1
  },
    {
    field:"email",
    headerName:"Teacher Email",
    minWidth:250,
    flex:1
  },
  {
    field:"phoneNo",
    headerName:"Teacher Phone Number",
    minWidth:250,
    flex:1
  }, {
    field:"identification",
    headerName:"National ID/Passport Number",
    minWidth:250,
    flex:1
  },
  {
    field:"qualification",
    headerName:"Teacher Qualification",
    minWidth:250,
    flex:1
  },
  {
    field:"curriculumTeaching",
    headerName:"Teacher Curriculum",
    minWidth:250,
    flex:1
  },
  {
    field:"classTeaching",
    headerName:"Teacher Grade",
    minWidth:250,
    flex:1
  },
  {
    field:"institute",
    headerName:"Teacher Institute",
    minWidth:250,
    flex:1
  },
  {
    field:"address",
    headerName:"Teacher Address",
    minWidth:300,
    flex:1
  },
  {
    field:"gender",
    headerName:"Teacher Gender",
    minWidth:250,
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
       
          <Link to={`edit/${params.getValue(params.id,"id")}`} >
          <EditIcon />
          </Link>
          <Button onClick={()=>deleteSubmitHandler(params.getValue(params.id,"id"))}>
          <DeleteIcon />
          </Button>
        </Fragment>
      )
    }
  }
];

const rows = [];

users && users.map((user) =>(
    rows.push({
        id: user._id,
        name: user.firstName + " " + user.lastName,
        email: user.email,
        role: user.role,
        address: user.address,
        gender: user.gender,
        phoneNo: user.phoneNo,
        identification: user.identification,
        qualification: user.qualification,
        curriculumTeaching: user.curriculumTeaching,
        classTeaching: user.classTeaching,
        institute: user.institute,
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
    if (userError) {
        alert.error(userError);
        dispatch(clearErrors());
    }
    if (success) {
        alert.success(message);
        history(`/super-admin-panel`)

        dispatch({
            type:DELETE_USER_RESET
        })
    }
  

    dispatch(superAllUserAction())
 
  },[userError,alert,dispatch,error,success,message,history,deleteUser])
  return (
    <Fragment>
        {
            loading ? (<Loader />) : (
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
                        <h1 id='productListHeading'>ALL Teachers Data</h1>
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
       

export default SuperAllUsers