import React, { Fragment, useEffect, useState } from 'react';
import './Dashboard.css';
import { Dialog  , DialogContent } from '@material-ui/core';
import Sidebar from './Sidebar';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../images/logo.png';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import dasboard from '../../images/dashboard.gif';
import DashboardCard from './DashboardCard.js';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import "./LessonOutCome.css";
import {  useParams } from 'react-router-dom';
import { allDashboardAction , clearErrors , dashboardDetailsAction } from '../../actions/dashboardActions.js';
import {useDispatch,useSelector} from 'react-redux';
import {useAlert} from 'react-alert';
import Loader from '../Loader/Loader.js';



ChartJS.register(ArcElement, Tooltip, Legend);

const DashboardDetails = () => {
  const options = {
    overflow: "visible",
    responsive: true,
   
  
  

    plugins: {
      legend: {
        display: false,
        position: 'right',
        maxWidth: 400, 


    labels: {
      color: '#333', // Color of the labels
      padding: 20,

     
    font: {
      size: 17
  }

    },
      },  
   

    },
   
  };

  const dispatch = useDispatch();
  const alert = useAlert();

  const {loading,error,dashboard} = useSelector((state)=>state.dashboardDetails);
  const {error:MainError,dashboards} = useSelector((state)=>state.dashboard);
  const {error:userError,user} = useSelector((state)=>state.loginUser);

  const labels = [
    dashboard && dashboard.skill1Name,
    dashboard && dashboard.skill2Name,
    dashboard && dashboard.skill3Name,
    dashboard && dashboard.skill4Name,
    dashboard && dashboard.skill5Name,
  ];

  const [open, setOpen] = useState(false);

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  }
  
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const dayOfWeek = today.toLocaleDateString('en-US', { weekday: 'long' });

  
  const dataValues = [dashboard && dashboard.skill1Percentage, dashboard && dashboard.skill2Percentage, dashboard && dashboard.skill3Percentage, dashboard && dashboard.skill4Percentage, dashboard && dashboard.skill5Percentage];
  
  const backgroundColors = ['#FF6384', '#FFCE56', '#36A2EB', '#4BC0C0', '#9966FF'];

  const data = {
    labels: labels,
    datasets: [
      {
        data: dataValues,
        backgroundColor: backgroundColors,
        hoverBackgroundColor: backgroundColors,
        offset:[30,50,60,70,80,90], 

      },
    ],
  };

 
   const {id} = useParams();

  useEffect(()=>{
    if (error) {
      alert.error(error);
      dispatch(clearErrors())
    }

    if (userError) {
      alert.error(userError);
      dispatch(clearErrors())
    }

    if (MainError) {
      alert.error(MainError);
      dispatch(clearErrors())
    }
    dispatch(allDashboardAction());
    dispatch(dashboardDetailsAction(id));
  },[error,alert,dispatch,MainError,userError,id])
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
              
    
              <div className='dashboardMiniContainer'>
                  <div>
                    <div className='dashboardIntroContainer'>
                      <div>
                      <h1>{dashboard && dashboard.name} Dashboard</h1>
                      <p>{dayOfWeek} , {formattedDate}</p>
                      </div>
                      <div>
                        <EmailOutlinedIcon />
                        <NotificationsActiveOutlinedIcon/>
                      </div>
                    </div>
    
                    <div className='dashboardMiniSecondContainer'>
                    <div>
                      <h1>Hi, {user && user.firstName} {user && user.lastName}</h1>
                      <p>READY TO START YOUR DAY?</p>
                    </div>
                    <div>
                      <img src={dasboard} alt="dashboardImage" />
                    </div>
    
                    </div>
    
                      
                <div className='DashboardCardMainContainer'>
                  {
                    dashboards && dashboards.map((details)=>(
                      <DashboardCard details={details} />
                    ))

                  }
                </div>



                <div className="lessons-outcomes-container">
  <div className="chart-title-container">
    <h2 className="chart-title"> Lesson Outcomes</h2>
  </div>

  <div className="chart-layout">
    <div className="chart-container">
      <Pie data={data} options={options} />
    </div>

    <div className="chart-legend">
      {data.labels.map((label, index) => (
        <div key={index} className="legend-item">
          <span
            className="legend-color"
            style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
          ></span>
          <span className="legend-label">{label}</span>
        </div>
      ))}
    </div>
  </div>
</div>
             
                {/* 
                <div className="lessons-outcomes-container">
                  <div>
                  <h2 className="chart-title">Lessons Outcomes</h2>
                  </div>
    
      <div className="chart-container">
        <Pie data={data} options={options} />
      </div>
    </div>
                 */}

                </div>
    
    
                  <div className='thirdMiniContainer'>
            
                    <div className='thirdMiniSubContainers'>
                  
                    <div className='sub-dashboard1'>
                    <h4>
                      Active Lesson
                    </h4>
                  </div>
                
                  <div className="sub-dashboard2">
                  <iframe width="160" height="140" src={dasboard && dashboard.youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen   />
                  </div>
               
                  <h3 onClick={submitReviewToggle} className='heroBtn'>{dashboard && dashboard.name}</h3>
                  <h5 onClick={submitReviewToggle} className='heroBtn'>{dashboard && dashboard.activeTopic}</h5>
    
                  <Dialog
            aria-labelledby='simple-dialog-title'
            open={open}
            onClose={submitReviewToggle}
            className='dialogBox'
            >
                 
                  <DialogContent
            >
{
                <iframe className='broyr' width="520" height="330" src={dashboard && dashboard.youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen   />

}
            </DialogContent>
        
                </Dialog>
                </div>
             
               
                    <div className='thirdMiniSubContainers'>
                      <h3>STANDARDS</h3>
                      <img src={dashboard.image && dashboard.image.url} alt="Avatar" />
                    <a href={ dashboard && dashboard.downloadStandards} target='blank'>DOWNLOAD STANDARDS</a>
      
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

export default DashboardDetails