import React, { Fragment, useEffect } from 'react';
import logo from '../../images/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import {useAlert} from 'react-alert';
import {useSelector , useDispatch} from 'react-redux';
import { clearErrors } from '../../actions/userActions';
import AdminSidebar from './AdminSidebar';
import {DataGrid} from '@material-ui/data-grid';
import './AllDashboard.css';
import { allDashboardAction  } from '../../actions/dashboardActions.js';
import Loader from '../Loader/Loader.js';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';


const AllDashboard = () => {

  const {error:userError,user} = useSelector((state)=>state.loginUser);
  const {loading,error,dashboards} = useSelector((state)=>state.dashboard);

  const alert = useAlert();

  const dispatch = useDispatch();



  const columns = [
    {
     field:"id",
     headerName:"Subject ID",
     minWidth:350,
     flex:2.5
    },
   {
    field:"name",
    headerName:"Subject Name",
    minWidth:250,
    flex:1
  },
  {
    field:"activeTopic",
    headerName:"Subject Active Topic",
    minWidth:250,
    flex:1
  },
  {
    field:"skill1Name",
    headerName:"Skill 1 Name",
    minWidth:250,
    flex:1
  },
  {
    field:"skill1Percentage",
    headerName:"Skill 1 Percentage",
    minWidth:250,
    flex:1
  },
  {
    field:"skill2Name",
    headerName:"Skill 2 Name",
    minWidth:250,
    flex:1
  },
  {
    field:"skill2Percentage",
    headerName:"Skill 2 Percentage",
    minWidth:250,
    flex:1
  },
  {
    field:"skill3Name",
    headerName:"Skill 3 Name",
    minWidth:250,
    flex:1
  },
  {
    field:"skill3Percentage",
    headerName:"Skill 3 Percentage",
    minWidth:250,
    flex:1
  },
  {
    field:"skill4Name",
    headerName:"Skill 4 Name",
    minWidth:250,
    flex:1
  },
  {
    field:"skill4Percentage",
    headerName:"Skill 4 Percentage",
    minWidth:250,
    flex:1
  },
  {
    field:"skill5Name",
    headerName:"Skill 5 Name",
    minWidth:250,
    flex:1
  },
  {
    field:"skill5Percentage",
    headerName:"Skill 5 Percentage",
    minWidth:250,
    flex:1
  },
  {
    field:"downloadStandards",
    headerName:"Download Subject Standards",
    minWidth:250,
    flex:1
  },
  {
    field:"youtube",
    headerName:"Youtube Embed Link",
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
        </Fragment>
      )
    }
  }
];

const rows = [];


    dashboards && dashboards.map((dash)=>(
        rows.push({
            id:dash._id,
            name:dash.name,
            activeTopic:dash.activeTopic,
            skill1Name:dash.skill1Name,
            skill1Percentage:dash.skill1Percentage,
            skill2Name:dash.skill2Name,
            skill2Percentage:dash.skill2Percentage,
            skill3Name:dash.skill3Name,
            skill3Percentage:dash.skill3Percentage,
            skill4Name:dash.skill4Name,
            skill4Percentage:dash.skill4Percentage,
            skill5Name:dash.skill5Name,
            skill5Percentage:dash.skill5Percentage,
            downloadStandards:dash.downloadStandards,
            youtube:dash.youtube,
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
  
 
    dispatch(allDashboardAction());
  },[userError,alert,dispatch,error])
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
                          <AdminSidebar />
                      </div>
                      <div>
                      <div className="productListContainer">
                        <h1 id='productListHeading'>ALL Dashboard Subject Standards</h1>
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

export default AllDashboard