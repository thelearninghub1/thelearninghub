import React, { Fragment, useEffect, useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { useAlert } from "react-alert";
import {Button} from '@material-ui/core';
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonIcon from "@mui/icons-material/Person";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { UPDATE_USER_RESET } from "../../constants/userConstants";
import { useParams , useNavigate } from "react-router-dom";
import { clearErrors , updateUserRole , getUserDetails } from "../../actions/userActions";
import SuperSidebar from "./SuperSidebar";
import Loader from "../Loader/Loader";
import './SuperUserRole.css';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../images/logo.png';



const SuperUserRole = () => {

    const dispatch = useDispatch();

    const {id} = useParams();

    const alert = useAlert();

    const history = useNavigate();

    const {loading,user,error} = useSelector((state)=>state.getSingleUser);

    const {loading:updateLoading , error:updateError , success} = useSelector((state)=>state.updatePassword);

    const [firstName,setFirstName] = useState("");
    const [email,setEmail] = useState("");
    const [role, setRole] = useState("");

    useEffect(()=>{
        if (user && user._id !== id) {
            dispatch(getUserDetails(id))
        } else {
            setFirstName(user.firstName  + " "  +   user.lastName  );
            setEmail(user.email);
            setRole(user.role);
        }
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        };
        if (updateError) {
            alert.error(updateError);
            dispatch(clearErrors());
        };
        if (success) {
            alert.success("User Updated Successfully");
            history("/super-admin-panel");
            dispatch({
                type:UPDATE_USER_RESET
            })
        }
    },[alert,dispatch,error,history,id,success,updateError,user])


    const updateUserSubmitHandler = (e) => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.set('firstName',firstName);
        myForm.set('email',email);
        myForm.set('role',role);
        dispatch(updateUserRole(id,myForm))
        
    }
  return (
    <Fragment>
   <div>
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
     <div className="maindashboard"> 
        <SuperSidebar/>
        <div className="newProductContainer">
            {loading?(<Loader/>):(
                <form
                className="createProductForm"
                onSubmit={updateUserSubmitHandler}
                >
                <h1>Update User Role</h1>
                <div>
                    <PersonIcon/>
                    <input 
                    type="text"
                    placeholder="Name"
                    required
                    value={firstName}
                   
                    onChange={(e)=>setFirstName(e.target.value)  }
                     />
                </div>
                <div>
                    <MailOutlineIcon/>
                    <input 
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                     />
                </div>
                <div>
                    <VerifiedUserIcon/>
                    <select value={role} onChange={(e)=>setRole(e.target.value)}>
                        <option value="">Choose Role</option>
                        <option value="admin">Admin</option>
                        <option value="super">Super</option>
                        <option value="User">User</option>
                    </select>
                </div>

                <Button
                id="createProductBtn"
                type="submit"
                className="updatePasswordBtn"
                disabled={updateLoading?true:false || role === "" ? true:false}
                >
                    Update
                </Button>

                </form>
            )}
        </div>
    </div>
    </div>
    </div>
   </Fragment>
  )
}

export default SuperUserRole
