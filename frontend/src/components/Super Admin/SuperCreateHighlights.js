import React, { Fragment, useEffect, useState } from 'react'
import SuperSidebar from './SuperSidebar'
import SearchIcon from '@mui/icons-material/Search'
import logo from '../../images/logo.png';
import { useSelector , useDispatch  } from 'react-redux';
import './SuperCreateHighlights.css';
import { clearErrors } from '../../actions/userActions';
import { createHighlightAction } from '../../actions/highlightActions';
import { useAlert } from 'react-alert';
import Loader from '../Loader/Loader';
import { CREATE_HIGHLIGHT_RESET } from '../../constants/highlightConstants';
import { useNavigate } from 'react-router-dom';

const SuperCreateHighlights = () => {
  const {error:userError,user} = useSelector((state)=>state.loginUser);
  const {loading,error,success} = useSelector((state)=>state.createHighlights)

  const alert = useAlert();
  const dispatch = useDispatch();
  const history = useNavigate();
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const createHighlightImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };


  const createHightlightSubmitHandler  = (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set('description',description);
    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(createHighlightAction(myForm));
  }

  useEffect(() => {
    if (userError) {
      alert.error(userError);
      dispatch(clearErrors());
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      alert.success('Post Created Successfully');
      history(`/super-admin-panel`)
      dispatch({type: CREATE_HIGHLIGHT_RESET});
    }

  },[userError,dispatch,alert,error,success,history]);
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
                <div className=" createdashboard">
             
                    <div>
                        <SuperSidebar />
                    </div>
                    <div>
          
                    <div className="createDashboardContainer">
                       <div className="createDashboardContainerForm">
                    <h1>Create Activity </h1>
                    <form className='highlightForm' onSubmit={createHightlightSubmitHandler} >
                      <div className='highlightsInput'>
                      <label className='highInput'>
          
          
                      <textarea
                      type="text"  
                      className="input" 
                      value={description}
                      onChange={(e)=>setDescription(e.target.value)}
                      name='description'
            />  
                      <i>Description</i>
          
                      
                      </label>
                   
                      </div>
          
          
          
          
          
          
          
          
                     
                         <div className='highlightsInput'>
                         <div className="inputBox" id='avatarPreview'> 
          
                         
            <input
              type="file"
              name="images"
              accept="image/*"
              onChange={createHighlightImagesChange}
              multiple
            />

<div id="createProductFormImage">
            {imagesPreview.map((image, index) => (
              <img key={index} src={image} alt="Product Preview" />
            ))}
          </div>
        
          
          </div> 
          
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

export default SuperCreateHighlights