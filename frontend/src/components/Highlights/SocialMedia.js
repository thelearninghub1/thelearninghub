import React, { Fragment, useState } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SocialImage from '../../images/social.jpg';
import './SocialMedia.css';
import Carousel from "react-material-ui-carousel";
import { Dialog  , DialogContent } from '@material-ui/core';


const SocialMedia = ({details}) => {
  
  const [open, setOpen] = useState(false);

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
}
  return (
    <Fragment>
        <div className="socialmediaContainer">
            <div className='socialMediaSubContainer1' >
               <div>
                <img src={ details && details.avatar.url} alt="Avatar" />
               </div>
               <div>
                <h3>{details && details.firstName} {details && details.lastName}</h3>
                <h4>{details && String(details.createdAt).substr(0,10)}</h4>
               </div>
            </div>
            <div className='socialMediaSubContainer2'>
                <p>{details && details.description}</p>
            </div>

            <div className='carouselContainer'>
              <Carousel className='Carousel'>
                {details.images &&
                  details.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                      onClick={submitReviewToggle} 
                      
                    />
                  ))}
              </Carousel>

               <Dialog
                          aria-labelledby='simple-dialog-title'
                          open={open}
                          onClose={submitReviewToggle}
                          className='dialogBox'
                          fullWidth maxWidth="md"
                          style={{
                            boxSizing: 'border-box',
                            overflow: 'hidden',
                          }}
                        
                          >
                               
                                <DialogContent
                            style={{
                              boxSizing: 'border-box',
                              overflowX: 'hidden',
                            }}
                          >
                                        <div className='carouselContainer1'>

              
              <Carousel className='Carousels'>
                {details.images &&
                  details.images.map((item, i) => (
                    <img
                      className="CarouselImages"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                      
                    />
                  ))}
              </Carousel>
              </div>
                          </DialogContent>
                      
                              </Dialog>
            </div>
           {/*     <div className='socialMediaSubContainer3'>
                <div>
                    <img src="https://i.ibb.co/GTw5ZKy/E-SDG-Icons-01.jpg" alt="" />
                </div>
                <div>
                    <div>
                    <img src="https://i.ibb.co/74n67Y9/E-SDG-Icons-02.jpg" alt="" />

                    </div>
                    <div>
                        <img src="https://i.ibb.co/y5Zs7d6/E-SDG-Icons-03.jpg" alt="" />
                        <div class="overlay">
                        <h1 className='overlay-text'>+10 </h1>
                        </div>
                    </div>
                </div>
            </div>   */}
            <div className='socialMediaSubContainer4'>
                    <h3>Reaction</h3>
                <div>
                    <ThumbUpIcon
                     />
                    <p>3</p>
                </div>
                <div>
                    <FavoriteBorderIcon />
                    <p>1</p>
                </div>
                <div>
                    <ThumbDownIcon />
                    <p>0</p>
                </div>
                <div>
                    <AccountCircleIcon />
                    <img src={SocialImage} alt="" />
                    <p>+4</p>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default SocialMedia