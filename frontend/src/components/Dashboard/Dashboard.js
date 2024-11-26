import React, { Fragment, useEffect, useState } from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar';
import { Dialog  , DialogContent } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../images/logo.png';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import dasboard from '../../images/dashboard.gif';
import DashboardCard from './DashboardCard.js';
import { allDashboardAction , clearErrors } from '../../actions/dashboardActions.js';
import {useDispatch , useSelector} from 'react-redux';
import {useAlert} from 'react-alert';
import Loader from '../Loader/Loader.js';
import MetaData from '../MetaData/MetaData.js';
import { Pie } from 'react-chartjs-2';
import content1 from '../../images/content.gif';
import content2 from '../../images/content4.gif';
import content3 from '../../images/content3.gif';


const Dashboard = () => {

  const options = {
    overflow: "hidden",
    responsive: true,
   
  
  

    plugins: {
      legend: {
        display: false,
        position: 'right',
        maxWidth: 400, 


    labels: {
      color: '#333', // Color of the labels
      padding: 25,

     
    font: {
      size: 17
  }

    },
      },  
   

    },
   
  };
  

  const backgroundColors = ['#FF6384', '#FFCE56', '#36A2EB', '#4BC0C0', '#9966FF',"pink"];

  const data = {
    labels: ["Science" , "Technology", "English" , "Arts","Mathematics" , "Sustainability"],
    datasets: [
      {
        data: [10,10,30,40,8,20],
        backgroundColor: backgroundColors,
        hoverBackgroundColor: backgroundColors,
        offset:[30,50,60,70,80,90], 
      },
    ],
  };

  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const dayOfWeek = today.toLocaleDateString('en-US', { weekday: 'long' });

  const [open, setOpen] = useState(false);

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
}

  const dispatch = useDispatch();

  const alert = useAlert();
  const {loading,error,dashboards} = useSelector((state)=>state.dashboard);
  const {error:userError,user} = useSelector((state)=>state.loginUser);

  useEffect(()=>{
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (userError) {
      alert.error(userError);
      dispatch(clearErrors());
    }
    dispatch(allDashboardAction())
  },[alert,error,dispatch,userError]);

  return (
    <Fragment>
      {
        loading ? (<Loader />):(
          <Fragment>
            <MetaData title={`TLH - Dashboard`} />
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
                  <h1>STEAMS Dashboard</h1>
                  <p>{dayOfWeek}, {formattedDate}</p>
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
                    dashboards && dashboards.map((details) =>(
                      <DashboardCard details={details} key={details} />
                    ))
                  }
                </div>



                <div className="lessons-outcomes-container">
  <div className="chart-title-container">
    <h2 className="chart-title">Class Lesson Summary</h2>
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
                  <h2 className="chart-title">Class Lessons Summary</h2>
                  </div>            
    
      <div className="chart-container">
     
        <Pie  data={data} options={options} className='pievro'  />
      </div>

    </div>

     */}

{/*     */}

              </div>
              <div className='thirdMiniContainer'>

              <div className='thirdMiniSubContainers'>
                  
              <div className='sub-dashboard1'>
                  <h4>
                    About Us
                  </h4>
                </div>
              
                <div className="sub-dashboard2">
                <iframe width="160" height="140" src="https://www.youtube.com/embed/q8NjbC4uGW4?si=ms9M2eysI54I-hm7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen   />
                </div>
             
                <h3 onClick={submitReviewToggle} className='heroBtn'>Intro to Learning Hub</h3>
                <Dialog
            aria-labelledby='simple-dialog-title'
            open={open}
            onClose={submitReviewToggle}
            className='dialogBox'
            >
                 
                  <DialogContent
            >
                <iframe className='broyr' width="520" height="330" src="https://www.youtube.com/embed/q8NjbC4uGW4?si=ms9M2eysI54I-hm7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen   />

            </DialogContent>
        
                </Dialog>
              </div>





              
              <div className='thirdMiniSubContainers'>
                  
              <div className='sub-dashboard1'>
                  <h4>
                    Previous Results
                  </h4>
                </div>
              
                <div className="sub-dashboard222 sub-1">
                  <div>
                    <img src={content1} alt="" />
                  </div>
                  <div>
                    <h4>Polymer Science</h4>
                    <p>Theory</p>
                  </div>
                </div>
                <div className="sub-dashboard222 sub-2">
                  <div>
                    <img src={content2} alt="" />
                  </div>
                  <div>
                    <h4>Metabolism</h4>
                    <p>Theory</p>
                  </div>
                </div>
                <div className="sub-dashboard222 sub-3">
                  <div>
                    <img src={content3} alt="" />
                  </div>
                  <div>
                    <h4>Induction</h4>
                    <p>Theory</p>
                  </div>
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

export default Dashboard