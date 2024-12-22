import React, { Fragment, useEffect, useState } from 'react'
import SuperSidebar from './SuperSidebar'
import SearchIcon from '@mui/icons-material/Search'
import logo from '../../images/logo.png';
import { useSelector , useDispatch  } from 'react-redux';
import './SuperCreateHighlights.css';
import { clearErrors } from '../../actions/userActions';
import { highlightDetailsAction , updateHighlightsAction } from '../../actions/highlightActions';
import { useAlert } from 'react-alert';
import Loader from '../Loader/Loader';
import {  UPDATE_HIGHLIGHT_RESET } from '../../constants/highlightConstants';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const SuperUpdateHighlight = () => {
  const {error:userError,user} = useSelector((state)=>state.loginUser);
  const {loading,error,success} = useSelector((state)=>state.createHighlights)
  const {error:detailsError,highlight} = useSelector((state)=>state.highlightDetails)

  const alert = useAlert();
  const dispatch = useDispatch();
  const history = useNavigate();
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const {id} = useParams();

  const createHighlightImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);
    setOldImages([]);

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

   dispatch(updateHighlightsAction(id,myForm));
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
      alert.success('Post Updated Successfully');
      history(`/super-admin-panel`)
      dispatch({type: UPDATE_HIGHLIGHT_RESET});
    }
    if (detailsError) {
      alert.error(detailsError)
      dispatch(clearErrors())
    }
     if (highlight && highlight._id !== id) {
        dispatch(highlightDetailsAction(id));
            
        } else {
          setDescription(highlight.description)
          setOldImages(highlight.images);
        }


  },[userError,dispatch,alert,error,success,history,detailsError,id,highlight]);
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
                    <h1>Update Activity </h1>
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
              {oldImages &&
                oldImages.map((image, index) => (
                  <img key={index} src={image.url} alt="Old Highlights Preview" />
                ))}
            </div>

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

export default SuperUpdateHighlight