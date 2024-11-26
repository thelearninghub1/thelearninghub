import React, { Fragment, useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import {useAlert} from 'react-alert';
import { useSelector , useDispatch } from 'react-redux';
import logo from '../../images/logo.png';
import { clearErrors  } from '../../actions/userActions';
import { useNavigate} from 'react-router-dom';
import { createDashboardSuper  } from '../../actions/dashboardActions';
import Loader from '../Loader/Loader';
import { CREATE_DASHBOARD_RESET } from '../../constants/dashboardConstants';
import SuperSidebar from './SuperSidebar';
import './SuperCreateDashboard.css';


const SuperCreateDashboard = () => {

  const {loading,error,success} = useSelector((state)=>state.createDashboard);

  const {error:userError,user} = useSelector((state)=>state.loginUser);
  const alert = useAlert();
  const dispatch = useDispatch();

  const history = useNavigate();

  const [avatarPreview , setAvatarPreview] = useState("/Profile.png");

  const [image, setImage] = useState("/Profile.png");

  const [name , setName] = useState("");
  const [youtube , setYoutube] = useState("");
  const [activeTopic , setActiveTopic] = useState("");
  const [downloadStandards , setDownloadStandards] = useState("");
  const [skill1Name , setSkill1Name] = useState("");
  const [skill2Name , setSkill2Name] = useState("");
  const [skill3Name , setSkill3Name] = useState("");
  const [skill4Name , setSkill4Name] = useState("");
  const [skill5Name , setSkill5Name] = useState("");

  const [skill1Percentage , setSkill1Percentage] = useState(0);
  const [skill2Percentage , setSkill2Percentage] = useState(0);
  const [skill3Percentage , setSkill3Percentage] = useState(0);
  const [skill4Percentage , setSkill4Percentage] = useState(0);
  const [skill5Percentage , setSkill5Percentage] = useState(0);

  

  const newDataChange = (e) => {

       if (e.target.name === "image") {
        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState === 2) {
            setAvatarPreview(reader.result);
            setImage(reader.result);
          }
        }
        reader.readAsDataURL(e.target.files[0]);

       }
  }

  const createDashboardSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("youtube",youtube);
    myForm.set("activeTopic",activeTopic);
    myForm.set("downloadStandards",downloadStandards);
    myForm.set("skill1Name",skill1Name);
    myForm.set("skill2Name",skill2Name);
    myForm.set("skill3Name",skill3Name);
    myForm.set("skill4Name",skill4Name);
    myForm.set("skill5Name",skill5Name);
    myForm.set("skill1Percentage",skill1Percentage);
    myForm.set("skill2Percentage",skill2Percentage);
    myForm.set("skill3Percentage",skill3Percentage);
    myForm.set("skill4Percentage",skill4Percentage);
    myForm.set("skill5Percentage",skill5Percentage);
    myForm.set("image",image);

    dispatch(createDashboardSuper(myForm));

  }


  useEffect(()=>{
    if (userError) {
      alert.error(userError)
      dispatch(clearErrors())   
    }
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    };
    if (success) {
      alert.success(`Standards Created Successfully`)
      history(`/super-admin-panel`);
      dispatch({
        type:CREATE_DASHBOARD_RESET
      })
    }
  },[userError,dispatch,alert,error,success,history])
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
                <div className=" createdashboard">
             
                    <div>
                        <SuperSidebar />
                    </div>
                    <div>

                    <div className="createDashboardContainer">
                       <div className="createDashboardContainerForm">
                    <h1>Create Dashboard </h1>
                    <form onSubmit={createDashboardSubmitHandler} className='dashboardForm'>
                      <div className='dashboardInputs'>
                      <label className='dashInput'>

<input type="text"  className="input" 
value={name} 
onChange={(e)=>setName(e.target.value)}
  />  
                      <i>Subject Name</i>

                      
                      </label>
                      <label  className='dashInput' >

                        <input type="text"  className="input" 
                        value={skill1Name} 
                        onChange={(e)=>setSkill1Name(e.target.value)}
                          />
                      <i>Skill no 1</i>

                      </label>
                      <label  className='dashInput'>
                        <input type="Number"  className="input" value={skill1Percentage}
                        onChange={(e)=>setSkill1Percentage(e.target.value)}   />
                      </label>

                      </div>
      

                      <div className='dashboardInputs'>
                      <label  className='dashInput'>


<input type="text"  className="input"  value={youtube} onChange={(e)=>setYoutube(e.target.value)}  />
<i>Youtube Embed Link</i>
</label>

<label  className='dashInput'>
                        <input type="text"  className="input" 
                        value={skill2Name} 
                        onChange={(e)=>setSkill2Name(e.target.value)} 
                        />
                      <i>Skill no 2</i>

                      </label>
                      <label  className='dashInput'>
                        <input type="Number"  className="input" value={skill2Percentage} onChange={(e)=>setSkill2Percentage(e.target.value)}   />
                      </label>

                        </div>



                        <div className='dashboardInputs'>
                        <label  className='dashInput'>
                        <input type="text"  className="input"  value={activeTopic} onChange={(e)=>setActiveTopic(e.target.value)}  />
                      <i>Active Topic</i>

                      </label>

                      <label  className='dashInput'>
                        <input type="text" className="input"  
                        value={skill3Name} onChange={(e)=>setSkill3Name(e.target.value)}  />
                      <i>Skill no 3</i>

                      </label>
                      <label className='dashInput'>
                        <input type="Number"  className="input" value={skill3Percentage} onChange={(e)=>setSkill3Percentage(e.target.value)}   />
                      </label>

                        </div>



                        <div className='dashboardInputs'>
                        <label className='dashInput'>
                        <input type="text"  className="input" 
                        value={downloadStandards} 
                        onChange={(e)=>setDownloadStandards(e.target.value)} 
                         />
                         <i>PDF Link</i>
                      </label>
                      <label className='dashInput'>
                        <input type="text"  className="input" value={skill4Name} onChange={(e)=>setSkill4Name(e.target.value)}   />
                         <i>Skill no 4</i>
                      </label>
                      <label className='dashInput'>
                        <input type="Number"  className="input"  value={skill4Percentage} onChange={(e)=>setSkill4Percentage(e.target.value)}  />
                      </label>
                         </div>
                     
                         <div className='dashboardInputs'>
                         <div className="inputBox" id='avatarPreview'> 
          
          <img 
          alt="Avatar Preview" 
          className='avatarImage' 
          src= {avatarPreview}
          />
          <input 
          type="file"
         name="image" 
         accept='image/*'
         onChange={newDataChange}
          />
    
     </div> 

                         <label className='dashInput'>
                        <input type="text"  className="input" value={skill5Name} onChange={(e)=>setSkill5Name(e.target.value)}  />
                        <i>Skill no 5</i>
                      </label>
                      <label className='dashInput'>
                        <input type="Number"  className="input"  value={skill5Percentage} onChange={(e)=>setSkill5Percentage(e.target.value)}  />
                      </label>
                          </div>
                     
                      
                    
                   
                    
                     
                   
                     
                      <button type="submit" className="buttonBtn">Confirm  
                      </button>
                    </form>
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

export default SuperCreateDashboard