import React, { Fragment, useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import {useAlert} from 'react-alert';
import { useSelector , useDispatch } from 'react-redux';
import logo from '../../images/logo.png';
import { clearErrors  } from '../../actions/userActions';
import { superCreateLessonAction } from '../../actions/lessonAction';
import { useNavigate } from 'react-router-dom';
import { CREATE_LESSON_RESET } from '../../constants/lessonConstants';
import Loader from '../Loader/Loader';
import SuperSidebar from './SuperSidebar';


const SuperCreateLesson = () => {


  const [name , setName]  = useState("");
  const [avatar , setAvatar]  = useState("/Profile.png");
  const [avatarPreview , setAvatarPreview]  = useState("/Profile.png");

  const [content1Name , setContent1Name] = useState("");
  const [content2Name , setContent2Name] = useState("");
  const [content3Name , setContent3Name] = useState("");
  const [content4Name , setContent4Name] = useState("");

  const [contentSub1Name , setContentSub1Name] = useState("");
  const [content2Sub1Name , setContent2Sub1Name] = useState("");
  const [content3Sub1Name , setContent3Sub1Name] = useState("");
  const [content4Sub1Name , setContent4Sub1Name] = useState("");

  const [contentSub2Name , setContentSub2Name] = useState("");
  const [content2Sub2Name , setContent2Sub2Name] = useState("");
  const [content3Sub2Name , setContent3Sub2Name] = useState("");
  const [content4Sub2Name , setContent4Sub2Name] = useState("");

  const [contentSub3Name , setContentSub3Name] = useState("");
  const [content2Sub3Name , setContent2Sub3Name] = useState("");
  const [content3Sub3Name , setContent3Sub3Name] = useState("");
  const [content4Sub3Name , setContent4Sub3Name] = useState("");

  const [contentSub4Name , setContentSub4Name] = useState("");
  const [content2Sub4Name , setContent2Sub4Name] = useState("");
  const [content3Sub4Name , setContent3Sub4Name] = useState("");
  const [content4Sub4Name , setContent4Sub4Name] = useState("");
  
  const [contentSub5Name , setContentSub5Name] = useState("");
  const [content2Sub5Name , setContent2Sub5Name] = useState("");
  const [content3Sub5Name , setContent3Sub5Name] = useState("");
  const [content4Sub5Name , setContent4Sub5Name] = useState("");

  const [contentSubFile , setContentSubFile] = useState("");
  const [contentSubFile2 , setContentSubFile2] = useState("");
  const [contentSubFile3 , setContentSubFile3] = useState("");
  const [contentSubFile4 , setContentSubFile4] = useState("");

  const [subContentTime , setSubContentTime] = useState("");
  const [subContentTime2 , setSubContentTime2] = useState("");
  const [subContentTime3 , setSubContentTime3] = useState("");
  const [subContentTime4 , setSubContentTime4] = useState("");

  const [SubContentanswerKey , setSubContentanswerKey] = useState("");
  const [SubContentanswerKey2 , setSubContentanswerKey2] = useState("");
  const [SubContentanswerKey3 , setSubContentanswerKey3] = useState("");
  const [SubContentanswerKey4 , setSubContentanswerKey4] = useState("");

  const [SubContentclassRoomLink , setSubContentclassRoomLink] = useState("");
  const [SubContentclassRoomLink2 , setSubContentclassRoomLink2] = useState("");
  const [SubContentclassRoomLink3 , setSubContentclassRoomLink3] = useState("");
  const [SubContentclassRoomLink4 , setSubContentclassRoomLink4] = useState("");

  const [SubContentStandard , setSubContentStandard] = useState("");
  const [SubContentStandard2 , setSubContentStandard2] = useState("");
  const [SubContentStandard3 , setSubContentStandard3] = useState("");
  const [SubContentStandard4 , setSubContentStandard4] = useState("");

  const [video1Name , setVideo1Name] = useState("");
  const [video2Name , setVideo2Name] = useState("");
  const [video3Name , setVideo3Name] = useState("");
  const [video4Name , setVideo4Name] = useState("");
  const [video5Name , setVideo5Name] = useState("");
  const [video6Name , setVideo6Name] = useState("");


  const [video1Link , setVideo1Link] = useState("");
  const [video2Link , setVideo2Link] = useState("");
  const [video3Link , setVideo3Link] = useState("");
  const [video4Link , setVideo4Link] = useState("");
  const [video5Link , setVideo5Link] = useState("");
  const [video6Link , setVideo6Link] = useState("");


  const [game1Name , setGame1Name] = useState("");
  const [game2Name , setGame2Name] = useState("");
  const [game3Name , setGame3Name] = useState("");
  const [game4Name , setGame4Name] = useState("");

  const [game1Link , setGame1Link] = useState("");
  const [game2Link , setGame2Link] = useState("");
  const [game3Link , setGame3Link] = useState("");
  const [game4Link , setGame4Link] = useState("");

  const [content1Image , setContent1Image]  = useState("/Profile.png")
  const [content2Image , setContent2Image]  = useState("/Profile.png")
  const [content3Image , setContent3Image]  = useState("/Profile.png")
  const [content4Image , setContent4Image]  = useState("/Profile.png")

  const [contentSub1Image , setContentSub1Image]  = useState("/Profile.png")
  const [contentSub2Image , setContentSub2Image]  = useState("/Profile.png")
  const [contentSub3Image , setContentSub3Image]  = useState("/Profile.png")
  const [contentSub4Image , setContentSub4Image]  = useState("/Profile.png")
  const [contentSub5Image , setContentSub5Image]  = useState("/Profile.png")

  const [content2Sub1Image , setContent2Sub1Image]  = useState("/Profile.png")
  const [content2Sub2Image , setContent2Sub2Image]  = useState("/Profile.png")
  const [content2Sub3Image , setContent2Sub3Image]  = useState("/Profile.png")
  const [content2Sub4Image , setContent2Sub4Image]  = useState("/Profile.png")
  const [content2Sub5Image , setContent2Sub5Image]  = useState("/Profile.png")

  const [content3Sub1Image , setContent3Sub1Image]  = useState("/Profile.png")
  const [content3Sub2Image , setContent3Sub2Image]  = useState("/Profile.png")
  const [content3Sub3Image , setContent3Sub3Image]  = useState("/Profile.png")
  const [content3Sub4Image , setContent3Sub4Image]  = useState("/Profile.png")
  const [content3Sub5Image , setContent3Sub5Image]  = useState("/Profile.png")


  const [content4Sub1Image , setContent4Sub1Image]  = useState("/Profile.png")
  const [content4Sub2Image , setContent4Sub2Image]  = useState("/Profile.png")
  const [content4Sub3Image , setContent4Sub3Image]  = useState("/Profile.png")
  const [content4Sub4Image , setContent4Sub4Image]  = useState("/Profile.png")
  const [content4Sub5Image , setContent4Sub5Image]  = useState("/Profile.png")

  

   const {error,loading,success} = useSelector((state)=>state.createLesson);
   const history = useNavigate();
    
    const {error:userError,user} = useSelector((state)=>state.loginUser);
    const alert = useAlert();
    const dispatch = useDispatch();

    const newDataChange = (e) => {
      if (e.target.name == "avatar") {

        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState == 2) {
            setAvatarPreview(reader.result);
            setAvatar(reader.result);
          }
        }
        reader.readAsDataURL(e.target.files[0]);
      }

    }

    const newDataChange1 = (e) => {
      if (e.target.name == "content1Image") {

        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState == 2) {
            setContent1Image(reader.result);

          }
        }
        reader.readAsDataURL(e.target.files[0]);
      }

    }

    const newDataChange2 = (e) => {
      if (e.target.name == "contentSub1Image") {

        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState == 2) {
            setContentSub1Image(reader.result);

          }
        }
        reader.readAsDataURL(e.target.files[0]);
      }

    }

    const newDataChange3 = (e) => {
      if (e.target.name == "contentSub2Image") {

        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState == 2) {
            setContentSub2Image(reader.result);

          }
        }
        reader.readAsDataURL(e.target.files[0]);
      }

    }

    const newDataChange4 = (e) => {
      if (e.target.name == "contentSub3Image") {

        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState == 2) {
            setContentSub3Image(reader.result);

          }
        }
        reader.readAsDataURL(e.target.files[0]);
      }

    }

    const newDataChange5 = (e) => {
      if (e.target.name == "contentSub4Image") {

        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState == 2) {
            setContentSub4Image(reader.result);

          }
        }
        reader.readAsDataURL(e.target.files[0]);
      }

    }
    
    const newDataChange6 = (e) => {
      if (e.target.name == "contentSub5Image") {

        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState == 2) {
            setContentSub5Image(reader.result);

          }
        }
        reader.readAsDataURL(e.target.files[0]);
      }

    }
    
    const newDataChange7 = (e) => {
      if (e.target.name == "content2Image") {

        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState == 2) {
            setContent2Image(reader.result);

          }
        }
        reader.readAsDataURL(e.target.files[0]);
      }

    }

    const newDataChange8 = (e) => {
      if (e.target.name == "content2Sub1Image") {

        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState == 2) {
            setContent2Sub1Image(reader.result);

          }
        }
        reader.readAsDataURL(e.target.files[0]);
      }

    }

    const newDataChange9 = (e) => {
      if (e.target.name == "content2Sub2Image") {

        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState == 2) {
            setContent2Sub2Image(reader.result);

          }
        }
        reader.readAsDataURL(e.target.files[0]);
      }

    }

    const newDataChange10 = (e) => {
      if (e.target.name == "content2Sub3Image") {

        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState == 2) {
            setContent2Sub3Image(reader.result);

          }
        }
        reader.readAsDataURL(e.target.files[0]);
      }

    }

    const newDataChange11 = (e) => {
      if (e.target.name == "content2Sub4Image") {

        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState == 2) {
            setContent2Sub4Image(reader.result);

          }
        }
        reader.readAsDataURL(e.target.files[0]);
      }

    }

    const newDataChange12 = (e) => {
      if (e.target.name == "content2Sub5Image") {

        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState == 2) {
            setContent2Sub5Image(reader.result);

          }
        }
        reader.readAsDataURL(e.target.files[0]);
      }
    }

    const newDataChange13 = (e) => {
      if (e.target.name == "content3Image") {

        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState == 2) {
            setContent3Image(reader.result);

          }
        }
        reader.readAsDataURL(e.target.files[0]);
      }
    }

    const newDataChange14 = (e) => {
      if (e.target.name == "content3Sub1Image") {

        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState == 2) {
            setContent3Sub1Image(reader.result);

          }
        }
        reader.readAsDataURL(e.target.files[0]);
      }
    }

    const newDataChange15 = (e) => {
      if (e.target.name == "content3Sub2Image") {

        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState == 2) {
            setContent3Sub2Image(reader.result);

          }
        }
        reader.readAsDataURL(e.target.files[0]);
      }
    }

    const newDataChange16 = (e) => {
      if (e.target.name == "content3Sub3Image") {

        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState == 2) {
            setContent3Sub3Image(reader.result);

          }
        }
        reader.readAsDataURL(e.target.files[0]);
      }
    }

    const newDataChange17 = (e) => {
      if (e.target.name == "content3Sub4Image") {

        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState == 2) {
            setContent3Sub4Image(reader.result);

          }
        }
        reader.readAsDataURL(e.target.files[0]);
      }
    }

    const newDataChange18 = (e) => {
      if (e.target.name == "content3Sub5Image") {

        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState == 2) {
            setContent3Sub5Image(reader.result);

          }
        }
        reader.readAsDataURL(e.target.files[0]);
      }
    }

    const newDataChange19 = (e) => {
      if (e.target.name == "content4Image") {

        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState == 2) {
            setContent4Image(reader.result);

          }
        }
        reader.readAsDataURL(e.target.files[0]);
      }
    }

    const newDataChange20 = (e) => {
      if (e.target.name == "content4Sub1Image") {

        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState == 2) {
            setContent4Sub1Image(reader.result);

          }
        }
        reader.readAsDataURL(e.target.files[0]);
      }
    }

    const newDataChange21 = (e) => {
      if (e.target.name == "content4Sub2Image") {

        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState == 2) {
            setContent4Sub2Image(reader.result);

          }
        }
        reader.readAsDataURL(e.target.files[0]);
      }
    }

    const newDataChange22 = (e) => {
      if (e.target.name == "content4Sub3Image") {

        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState == 2) {
            setContent4Sub3Image(reader.result);

          }
        }
        reader.readAsDataURL(e.target.files[0]);
      }
    }

    const newDataChange23 = (e) => {
      if (e.target.name == "content4Sub4Image") {

        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState == 2) {
            setContent4Sub4Image(reader.result);

          }
        }
        reader.readAsDataURL(e.target.files[0]);
      }
    }

    const newDataChange24 = (e) => {
      if (e.target.name == "content4Sub5Image") {

        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState == 2) {
            setContent4Sub5Image(reader.result);

          }
        }
        reader.readAsDataURL(e.target.files[0]);
      }
    }



    const createLessonSubmitHandler = (e) => {
      e.preventDefault();

      const myForm = new FormData();

      myForm.set("name",name);
      myForm.set("avatar",avatar);
      myForm.set("content1Name",content1Name);
      myForm.set("content1Image",content1Image);
      myForm.set("content2Name",content2Name);
      myForm.set("content2Image",content2Image);
      myForm.set("content3Name",content3Name);
      myForm.set("content3Image",content3Image);
      myForm.set("content4Name",content4Name);
      myForm.set("content4Image",content4Image);
      myForm.set("contentSub1Name",contentSub1Name);
      myForm.set("content2Sub1Name",content2Sub1Name);
      myForm.set("content3Sub1Name",content3Sub1Name);
      myForm.set("content4Sub1Name",content4Sub1Name);
      myForm.set("contentSub1Image",contentSub1Image);
      myForm.set("content2Sub2Image",content2Sub2Image);
      myForm.set("content3Sub2Image",content3Sub2Image);
      myForm.set("content2Sub1Image",content2Sub1Image);
      myForm.set("content3Sub1Image",content3Sub1Image);
      myForm.set("content4Sub1Image",content4Sub1Image);
      myForm.set("contentSub2Name",contentSub2Name);
      myForm.set("content2Sub2Name",content2Sub2Name);
      myForm.set("content3Sub2Name",content3Sub2Name);
      myForm.set("content4Sub2Name",content4Sub2Name);
      myForm.set("contentSub2Image",contentSub2Image);
      myForm.set("content4Sub2Image",content4Sub2Image);
      myForm.set("contentSub3Name",contentSub3Name);
      myForm.set("content2Sub3Name",content2Sub3Name);
      myForm.set("content3Sub3Name",content3Sub3Name);
      myForm.set("content4Sub3Name",content4Sub3Name);
      myForm.set("contentSub3Image",contentSub3Image);
      myForm.set("content2Sub3Image",content2Sub3Image);
      myForm.set("content3Sub3Image",content3Sub3Image);
      myForm.set("content4Sub3Image",content4Sub3Image);
      myForm.set("contentSub4Name",contentSub4Name);
      myForm.set("content2Sub4Name",content2Sub4Name);
      myForm.set("content3Sub4Name",content3Sub4Name);
      myForm.set("content4Sub4Name",content4Sub4Name);
      myForm.set("contentSub4Image",contentSub4Image);
      myForm.set("content2Sub4Image",content2Sub4Image);
      myForm.set("content3Sub4Image",content3Sub4Image);
      myForm.set("content4Sub4Image",content4Sub4Image);
      myForm.set("contentSub5Name",contentSub5Name);
      myForm.set("content2Sub5Name",content2Sub5Name);
      myForm.set("content3Sub5Name",content3Sub5Name);
      myForm.set("content4Sub5Name",content4Sub5Name);
      myForm.set("contentSub5Image",contentSub5Image);
      myForm.set("content2Sub5Image",content2Sub5Image);
      myForm.set("content3Sub5Image",content3Sub5Image);
      myForm.set("content4Sub5Image",content4Sub5Image);
      myForm.set("contentSubFile",contentSubFile);
      myForm.set("contentSubFile2",contentSubFile2);
      myForm.set("contentSubFile3",contentSubFile3);
      myForm.set("contentSubFile4",contentSubFile4);
      myForm.set("subContentTime",subContentTime);
      myForm.set("subContentTime3",subContentTime3);
      myForm.set("subContentTime2",subContentTime2);
      myForm.set("subContentTime4",subContentTime4);
      myForm.set("SubContentanswerKey",SubContentanswerKey);
      myForm.set("SubContentanswerKey2",SubContentanswerKey2);
      myForm.set("SubContentanswerKey3",SubContentanswerKey3);
      myForm.set("SubContentanswerKey4",SubContentanswerKey4);
      myForm.set("SubContentStandard",SubContentStandard);
      myForm.set("SubContentStandard2",SubContentStandard2);
      myForm.set("SubContentStandard3",SubContentStandard3);
      myForm.set("SubContentStandard4",SubContentStandard4);
      myForm.set("SubContentclassRoomLink",SubContentclassRoomLink);
      myForm.set("SubContentclassRoomLink2",SubContentclassRoomLink2);
      myForm.set("SubContentclassRoomLink3",SubContentclassRoomLink3);
      myForm.set("SubContentclassRoomLink4",SubContentclassRoomLink4);

      myForm.set("video1Name",video1Name);
      myForm.set("video1Link",video1Link);
      myForm.set("video2Name",video2Name);
      myForm.set("video2Link",video2Link);
      myForm.set("video3Name",video3Name);
      myForm.set("video3Link",video3Link);
      myForm.set("video4Name",video4Name);
      myForm.set("video4Link",video4Link);
      myForm.set("video5Name",video5Name);
      myForm.set("video5Link",video5Link);
      myForm.set("video6Name",video6Name);
      myForm.set("video6Link",video6Link);
      myForm.set("game1Name",game1Name);
      myForm.set("game1Link",game1Link);
      myForm.set("game2Name",game2Name);
      myForm.set("game2Link",game2Link);
      myForm.set("game3Name",game3Name);
      myForm.set("game3Link",game3Link);
      myForm.set("game4Name",game4Name);
      myForm.set("game4Link",game4Link);

      dispatch(superCreateLessonAction(myForm));
      

    }
    
  useEffect(()=>{
    if (userError) {
      alert.error(userError)
      dispatch(clearErrors())   
    }
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    if (success) {
      alert.success(`Lesson Created Successfully`);
      history(`/super-admin-panel`);
      dispatch({
        type:CREATE_LESSON_RESET
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
              <div className="maindashboard">
           
                  <div>
                      <SuperSidebar />
                  </div>
                  <div>
                   
                     <div className="updatePasswordContainer">
                <div className="updatePasswordForm">
                  <h1 className="title">Create Lesson </h1>
                  <form onSubmit={createLessonSubmitHandler} encType='multipart/form-data'>
      {/* ----- Main Part ----- */}
                   
                    <label>
                      <input 
                      type="text" 
                      placeholder="Enter Lesson Name" 
                      className="input"  
                      value={name} 
                      onChange={(e)=>setName(e.target.value)}
                       />
                    </label>

                    <div 
                    className="inputBox" 
                    id='avatarPreview'
                    > 
                   <img 
                   alt="Avatar Preview" 
                   className='avatarImage' 
                   src= {avatarPreview}
                  />
                  <input 
                  type="file"
                  name="avatar" 
                  accept='image/*'
                  onChange={newDataChange}
                  />
                </div> 
               {/* ----- Videos Part ----- */}
                   <label>
                      <input 
                      type="text" 
                      placeholder="Enter Embedded Video 1 Heading" 
                      className="input" 
                      value={video1Name} 
                      onChange={(e)=>setVideo1Name(e.target.value)} 
                      />
                    </label>
                    <label>
                      <input 
                      type="text" 
                      placeholder="Enter Embedded Video 1 Link " 
                      className="input"  
                      value={video1Link} 
                      onChange={(e)=>setVideo1Link(e.target.value)}
                       />
                    </label>
                    <label>
                      <input type="text" placeholder="Enter Embedded Video 2 Heading " className="input"  value={video2Name} onChange={(e)=>setVideo2Name(e.target.value)} />
                    </label>
                    <label>
                      <input type="text" placeholder="Enter Embedded Video 2 Link " className="input"  value={video2Link} onChange={(e)=>setVideo2Link(e.target.value)} />
                    </label>
                    <label>
                      <input type="text" placeholder="Enter Embedded Video 3 Heading " className="input"  value={video3Name} onChange={(e)=>setVideo3Name(e.target.value)} />
                    </label>
                    <label>
                      <input type="text" placeholder="Enter Embedded Video 3 Link " className="input"  value={video3Link} onChange={(e)=>setVideo3Link(e.target.value)} />
                    </label>
                    <label>
                      <input type="text" placeholder="Enter Embedded Video 4 Heading " className="input"  value={video4Name} onChange={(e)=>setVideo4Name(e.target.value)} />
                    </label>
                    <label>
                      <input type="text" placeholder="Enter Embedded Video 4 Link " className="input"  value={video4Link} onChange={(e)=>setVideo4Link(e.target.value)} />
                    </label>
                    <label>
                      <input type="text" placeholder="Enter Embedded Video 5 Heading " className="input"  value={video5Name} onChange={(e)=>setVideo5Name(e.target.value)} />
                    </label>
                    <label>
                      <input type="text" placeholder="Enter Embedded Video 5 Link " className="input"  value={video5Link} onChange={(e)=>setVideo5Link(e.target.value)} />
                    </label>
                    <label>
                      <input type="text" placeholder="Enter Embedded Video 6 Heading " className="input"  value={video6Name} onChange={(e)=>setVideo6Name(e.target.value)} />
                    </label>
                    <label>
                      <input type="text" placeholder="Enter Embedded Video 6 Link " className="input"  value={video6Link} onChange={(e)=>setVideo6Link(e.target.value)} />
                    </label>
                     {/* ----- Games Part ----- */}
                     <label>
                      <input type="text" placeholder="Enter Embedded Game 1 Name " className="input"  value={game1Name} onChange={(e)=>setGame1Name(e.target.value)} />
                    </label>
                    <label>
                      <input type="text" placeholder="Enter Embedded Game 1 Link " className="input"  value={game1Link} onChange={(e)=>setGame1Link(e.target.value)} />
                    </label>
                    <label>
                      <input type="text" placeholder="Enter Embedded Game 2 Name " className="input"  value={game2Name} onChange={(e)=>setGame2Name(e.target.value)} />
                    </label>
                    <label>
                      <input type="text" placeholder="Enter Embedded Game 2 Link " className="input"  value={game2Link} onChange={(e)=>setGame2Link(e.target.value)} />
                    </label>

                    <label>
                      <input type="text" placeholder="Enter Embedded Game 3 Name " className="input"  value={game3Name} onChange={(e)=>setGame3Name(e.target.value)} />
                    </label>
                    <label>
                      <input type="text" placeholder="Enter Embedded Game 3 Link " className="input"  value={game3Link} onChange={(e)=>setGame3Link(e.target.value)} />
                    </label>

                    <label>
                      <input type="text" placeholder="Enter Embedded Game 4 Name " className="input"  value={game4Name} onChange={(e)=>setGame4Name(e.target.value)} />
                    </label>
                    <label>
                      <input type="text" placeholder="Enter Embedded Game 4 Link " className="input"  value={game4Link} onChange={(e)=>setGame4Link(e.target.value)} />
                    </label>

                     {/* ----- Content Parts ----- */}

                     {/* --- Content Part 1 --- */}
                     <label>
                      <input 
                      type="text" 
                      placeholder="Enter first Content Name " 
                      className="input"  
                      value={content1Name} 
                      onChange={(e)=>setContent1Name(e.target.value)}
                       />
                    </label>

                    <div 
                    className="inputBox" 
                    id='avatarPreview'
                    > 
                  <input 
                  type="file"
                  name="content1Image" 
                  accept='image/*'
                  onChange={newDataChange1}
                  />
                </div> 


                <label>
                      <input 
                      type="text" 
                      placeholder="Enter First Content Sub Content First Name " 
                      className="input"  
                      value={contentSub1Name} 
                      onChange={(e)=>setContentSub1Name(e.target.value)}
                       />
                    </label>
                    
                    <div 
                    className="inputBox" 
                    id='avatarPreview'
                    > 
                  <input 
                  type="file"
                  name="contentSub1Image" 
                  accept='image/*'
                  onChange={newDataChange2}
                  />
                </div> 


                <label>
                      <input 
                      type="text" 
                      placeholder="Enter First Content Sub Content Second Name " 
                      className="input"  
                      value={contentSub2Name} 
                      onChange={(e)=>setContentSub2Name(e.target.value)}
                       />
                    </label>
                    <div 
                    className="inputBox" 
                    id='avatarPreview'
                    > 
                  <input 
                  type="file"
                  name="contentSub2Image" 
                  accept='image/*'
                  onChange={newDataChange3}
                  />
                </div> 

                <label>
                      <input 
                      type="text" 
                      placeholder="Enter First Content Sub Content Third Name" 
                      className="input"  
                      value={contentSub3Name} 
                      onChange={(e)=>setContentSub3Name(e.target.value)}
                       />
                    </label>

                    <div 
                    className="inputBox" 
                    id='avatarPreview'
                    > 
                  <input 
                  type="file"
                  name="contentSub3Image" 
                  accept='image/*'
                  onChange={newDataChange4}
                  />
                </div> 


                <label>
                      <input 
                      type="text" 
                      placeholder="Enter First Content Sub Content Fourth Name" 
                      className="input"  
                      value={contentSub4Name} 
                      onChange={(e)=>setContentSub4Name(e.target.value)}
                       />
                    </label>

                    
                    <div 
                    className="inputBox" 
                    id='avatarPreview'
                    > 
                  <input 
                  type="file"
                  name="contentSub4Image" 
                  accept='image/*'
                  onChange={newDataChange5}
                  />
                </div> 

                <label>
                      <input 
                      type="text" 
                      placeholder="Enter First Content Sub Content Fifth Name" 
                      className="input"  
                      value={contentSub5Name} 
                      onChange={(e)=>setContentSub5Name(e.target.value)}
                       />
                    </label>
                    <div 
                    className="inputBox" 
                    id='avatarPreview'
                    > 
                  <input 
                  type="file"
                  name="contentSub5Image" 
                  accept='image/*'
                  onChange={newDataChange6}
                  />
                </div> 

                <label>
                      <input 
                      type="text" 
                      placeholder="Enter First Lesson Handouts  PDF Link" 
                      className="input"  
                      value={contentSubFile} 
                      onChange={(e)=>setContentSubFile(e.target.value)}
                       />
                    </label>

                    <label>
                      <input 
                      type="text" 
                      placeholder="Enter First Content Class Duration" 
                      className="input"  
                      value={subContentTime} 
                      onChange={(e)=>setSubContentTime(e.target.value)}
                       />
                    </label>

                    <label>
                      <input 
                      type="text" 
                      placeholder="Enter First Content Keys PDF Link" 
                      className="input"  
                      value={SubContentanswerKey} 
                      onChange={(e)=>setSubContentanswerKey(e.target.value)}
                       />
                    </label>


                    <label>
                      <input 
                      type="text" 
                      placeholder="Enter First Content Class Room  Link" 
                      className="input"  
                      value={SubContentclassRoomLink} 
                      onChange={(e)=>setSubContentclassRoomLink(e.target.value)}
                       />
                    </label>

                    <label>
                      <input 
                      type="text" 
                      placeholder="Enter First Content Standards  Link" 
                      className="input"  
                      value={SubContentStandard} 
                      onChange={(e)=>setSubContentStandard(e.target.value)}
                       />
                    </label>
                     {/* --- Content Part 2 --- */}

                     <label>
                      <input 
                      type="text" 
                      placeholder="Enter Second Content Name " 
                      className="input"  
                      value={content2Name} 
                      onChange={(e)=>setContent2Name(e.target.value)}
                       />
                    </label>
                    <div 
                    className="inputBox" 
                    id='avatarPreview'
                    > 
                  <input 
                  type="file"
                  name="content2Image" 
                  accept='image/*'
                  onChange={newDataChange7}
                  />
                </div> 

                <label>
                      <input 
                      type="text" 
                      placeholder="Enter Second Content Sub Content First Name " 
                      className="input"  
                      value={content2Sub1Name} 
                      onChange={(e)=>setContent2Sub1Name(e.target.value)}
                       />
                    </label>


                       
                    <div 
                    className="inputBox" 
                    id='avatarPreview'
                    > 
                  <input 
                  type="file"
                  name="content2Sub1Image" 
                  accept='image/*'
                  onChange={newDataChange8}
                  />
                </div> 

                
                <label>
                      <input 
                      type="text" 
                      placeholder="Enter Second Content Sub Content Second Name " 
                      className="input"  
                      value={content2Sub2Name} 
                      onChange={(e)=>setContent2Sub2Name(e.target.value)}
                       />
                    </label>

                    <div 
                    className="inputBox" 
                    id='avatarPreview'
                    > 
                  <input 
                  type="file"
                  name="content2Sub2Image" 
                  accept='image/*'
                  onChange={newDataChange9}
                  />
                </div> 

                <label>
                      <input 
                      type="text" 
                      placeholder="Enter Second Content Sub Content Third Name " 
                      className="input"  
                      value={content2Sub3Name} 
                      onChange={(e)=>setContent2Sub3Name(e.target.value)}
                       />
                    </label>
                    <div 
                    className="inputBox" 
                    id='avatarPreview'
                    > 
                  <input 
                  type="file"
                  name="content2Sub3Image" 
                  accept='image/*'
                  onChange={newDataChange10}
                  />
                </div> 

                <label>
                      <input 
                      type="text" 
                      placeholder="Enter Second Content Sub Content Fourth Name " 
                      className="input"  
                      value={content2Sub4Name} 
                      onChange={(e)=>setContent2Sub4Name(e.target.value)}
                       />
                    </label>

                    <div 
                    className="inputBox" 
                    id='avatarPreview'
                    > 
                  <input 
                  type="file"
                  name="content2Sub4Image" 
                  accept='image/*'
                  onChange={newDataChange11}
                  />
                </div> 

                <label>
                      <input 
                      type="text" 
                      placeholder="Enter Second Content Sub Content Fifth Name " 
                      className="input"  
                      value={content2Sub5Name} 
                      onChange={(e)=>setContent2Sub5Name(e.target.value)}
                       />
                    </label>

                    <div 
                    className="inputBox" 
                    id='avatarPreview'
                    > 
                  <input 
                  type="file"
                  name="content2Sub5Image" 
                  accept='image/*'
                  onChange={newDataChange12}
                  />
                </div> 

                <label>
                      <input 
                      type="text" 
                      placeholder="Enter Second Lesson Handouts  PDF Link" 
                      className="input"  
                      value={contentSubFile2} 
                      onChange={(e)=>setContentSubFile2(e.target.value)}
                       />
                    </label>

                    <label>
                      <input 
                      type="text" 
                      placeholder="Enter Second Content Class Duration" 
                      className="input"  
                      value={subContentTime2} 
                      onChange={(e)=>setSubContentTime2(e.target.value)}
                       />
                    </label>

                    <label>
                      <input 
                      type="text" 
                      placeholder="Enter Second Content Keys PDF Link" 
                      className="input"  
                      value={SubContentanswerKey2} 
                      onChange={(e)=>setSubContentanswerKey2(e.target.value)}
                       />
                    </label>

                    
                    <label>
                      <input 
                      type="text" 
                      placeholder="Enter Second Content Class Room  Link" 
                      className="input"  
                      value={SubContentclassRoomLink2} 
                      onChange={(e)=>setSubContentclassRoomLink2(e.target.value)}
                       />
                    </label>

                    <label>
                      <input 
                      type="text" 
                      placeholder="Enter Second Content Standards  Link" 
                      className="input"  
                      value={SubContentStandard2} 
                      onChange={(e)=>setSubContentStandard2(e.target.value)}
                       />
                    </label>
                     {/* --- Content Part 3 --- */}
                     <label>
                      <input 
                      type="text" 
                      placeholder="Enter Third Content Name " 
                      className="input"  
                      value={content3Name} 
                      onChange={(e)=>setContent3Name(e.target.value)}
                       />
                    </label>
                    <div 
                    className="inputBox" 
                    id='avatarPreview'
                    > 
                  <input 
                  type="file"
                  name="content3Image" 
                  accept='image/*'
                  onChange={newDataChange13}
                  />
                </div> 

                <label>
                      <input 
                      type="text" 
                      placeholder="Enter Third Content Sub Content First Name " 
                      className="input"  
                      value={content3Sub1Name} 
                      onChange={(e)=>setContent3Sub1Name(e.target.value)}
                       />
                    </label>

                    <div 
                    className="inputBox" 
                    id='avatarPreview'
                    > 
                  <input 
                  type="file"
                  name="content3Sub1Image" 
                  accept='image/*'
                  onChange={newDataChange14}
                  />
                </div> 
                <label>
                      <input 
                      type="text" 
                      placeholder="Enter Third Content Sub Content Second Name " 
                      className="input"  
                      value={content3Sub2Name} 
                      onChange={(e)=>setContent3Sub2Name(e.target.value)}
                       />
                    </label>

                    <div 
                    className="inputBox" 
                    id='avatarPreview'
                    > 
                  <input 
                  type="file"
                  name="content3Sub2Image" 
                  accept='image/*'
                  onChange={newDataChange15}
                  />
                </div> 

                <label>
                      <input 
                      type="text" 
                      placeholder="Enter Third Content Sub Content Third Name " 
                      className="input"  
                      value={content3Sub3Name} 
                      onChange={(e)=>setContent3Sub3Name(e.target.value)}
                       />
                    </label>

                    <div 
                    className="inputBox" 
                    id='avatarPreview'
                    > 
                  <input 
                  type="file"
                  name="content3Sub3Image" 
                  accept='image/*'
                  onChange={newDataChange16}
                  />
                </div> 

                <label>
                      <input 
                      type="text" 
                      placeholder="Enter Third Content Sub Content Fourth Name " 
                      className="input"  
                      value={content3Sub4Name} 
                      onChange={(e)=>setContent3Sub4Name(e.target.value)}
                       />
                    </label>

                    <div 
                    className="inputBox" 
                    id='avatarPreview'
                    > 
                  <input 
                  type="file"
                  name="content3Sub4Image" 
                  accept='image/*'
                  onChange={newDataChange17}
                  />
                </div> 

                <label>
                      <input 
                      type="text" 
                      placeholder="Enter Third Content Sub Content Fifth Name " 
                      className="input"  
                      value={content3Sub5Name} 
                      onChange={(e)=>setContent3Sub5Name(e.target.value)}
                       />
                    </label>

                    <div 
                    className="inputBox" 
                    id='avatarPreview'
                    > 
                  <input 
                  type="file"
                  name="content3Sub5Image" 
                  accept='image/*'
                  onChange={newDataChange18}
                  />
                </div> 

                <label>
                      <input 
                      type="text" 
                      placeholder="Enter Third Lesson Handouts  PDF Link" 
                      className="input"  
                      value={contentSubFile3} 
                      onChange={(e)=>setContentSubFile3(e.target.value)}
                       />
                    </label>

                    <label>
                      <input 
                      type="text" 
                      placeholder="Enter Third Content Class Duration" 
                      className="input"  
                      value={subContentTime3} 
                      onChange={(e)=>setSubContentTime3(e.target.value)}
                       />
                    </label>

                    <label>
                      <input 
                      type="text" 
                      placeholder="Enter Third Content Keys PDF Link" 
                      className="input"  
                      value={SubContentanswerKey3} 
                      onChange={(e)=>setSubContentanswerKey3(e.target.value)}
                       />
                    </label>
                    
                    <label>
                      <input 
                      type="text" 
                      placeholder="Enter Third Content Class Room  Link" 
                      className="input"  
                      value={SubContentclassRoomLink3} 
                      onChange={(e)=>setSubContentclassRoomLink3(e.target.value)}
                       />
                    </label>

                    <label>
                      <input 
                      type="text" 
                      placeholder="Enter Third Content Standards  Link" 
                      className="input"  
                      value={SubContentStandard3} 
                      onChange={(e)=>setSubContentStandard3(e.target.value)}
                       />
                    </label>
                     {/* --- Content Part 4 --- */}
                             

                     <label>
                      <input 
                      type="text" 
                      placeholder="Enter Fourth Content Name " 
                      className="input"  
                      value={content4Name} 
                      onChange={(e)=>setContent4Name(e.target.value)}
                       />
                    </label>
                    <div 
                    className="inputBox" 
                    id='avatarPreview'
                    > 
                  <input 
                  type="file"
                  name="content4Image" 
                  accept='image/*'
                  onChange={newDataChange19}
                  />
                </div> 
          

                <label>
                      <input 
                      type="text" 
                      placeholder="Enter Fourth Content Sub Content First Name " 
                      className="input"  
                      value={content4Sub1Name} 
                      onChange={(e)=>setContent4Sub1Name(e.target.value)}
                       />
                    </label>

                    <div 
                    className="inputBox" 
                    id='avatarPreview'
                    > 
                  <input 
                  type="file"
                  name="content4Sub1Image" 
                  accept='image/*'
                  onChange={newDataChange20}
                  />
                </div> 

                <label>
                      <input 
                      type="text" 
                      placeholder="Enter Fourth Content Sub Content Second Name " 
                      className="input"  
                      value={content4Sub2Name} 
                      onChange={(e)=>setContent4Sub2Name(e.target.value)}
                       />
                    </label>
                    <div 
                    className="inputBox" 
                    id='avatarPreview'
                    > 
                  <input 
                  type="file"
                  name="content4Sub2Image" 
                  accept='image/*'
                  onChange={newDataChange21}
                  />
                </div> 
                <label>
                      <input 
                      type="text" 
                      placeholder="Enter Fourth Content Sub Content Third Name " 
                      className="input"  
                      value={content4Sub3Name} 
                      onChange={(e)=>setContent4Sub3Name(e.target.value)}
                       />
                    </label>
                    <div 
                    className="inputBox" 
                    id='avatarPreview'
                    > 
                  <input 
                  type="file"
                  name="content4Sub3Image" 
                  accept='image/*'
                  onChange={newDataChange22}
                  />
                </div> 

                <label>
                      <input 
                      type="text" 
                      placeholder="Enter Fourth Content Sub Content Fourth Name " 
                      className="input"  
                      value={content4Sub4Name} 
                      onChange={(e)=>setContent4Sub4Name(e.target.value)}
                       />
                    </label>

                    <div 
                    className="inputBox" 
                    id='avatarPreview'
                    > 
                  <input 
                  type="file"
                  name="content4Sub4Image" 
                  accept='image/*'
                  onChange={newDataChange23}
                  />
                </div>

                   <label>
                      <input 
                      type="text" 
                      placeholder="Enter Fourth Content Sub Content Fifth Name " 
                      className="input"  
                      value={content4Sub5Name} 
                      onChange={(e)=>setContent4Sub5Name(e.target.value)}
                       />
                    </label>

                    <div 
                    className="inputBox" 
                    id='avatarPreview'
                    > 
                  <input 
                  type="file"
                  name="content4Sub5Image" 
                  accept='image/*'
                  onChange={newDataChange24}
                  />
                </div>
                <label>
                      <input 
                      type="text" 
                      placeholder="Enter Fourth Lesson Handouts  PDF Link" 
                      className="input"  
                      value={contentSubFile4} 
                      onChange={(e)=>setContentSubFile4(e.target.value)}
                       />
                    </label>
 
                    <label>
                      <input 
                      type="text" 
                      placeholder="Enter Fourth Content Class Duration" 
                      className="input"  
                      value={subContentTime4} 
                      onChange={(e)=>setSubContentTime4(e.target.value)}
                       />
                    </label>
                    <label>
                      <input 
                      type="text" 
                      placeholder="Enter Fourth Content Keys PDF Link" 
                      className="input"  
                      value={SubContentanswerKey4} 
                      onChange={(e)=>setSubContentanswerKey4(e.target.value)}
                       />
                    </label>


                    <label>
                      <input 
                      type="text" 
                      placeholder="Enter Fourth Content Class Room  Link" 
                      className="input"  
                      value={SubContentclassRoomLink4} 
                      onChange={(e)=>setSubContentclassRoomLink4(e.target.value)}
                       />
                    </label>

                    <label>
                      <input 
                      type="text" 
                      placeholder="Enter Fourth Content Standards  Link" 
                      className="input"  
                      value={SubContentStandard4} 
                      onChange={(e)=>setSubContentStandard4(e.target.value)}
                       />
                    </label>
                     {/* --- Content Part End --- */}
        
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

export default SuperCreateLesson