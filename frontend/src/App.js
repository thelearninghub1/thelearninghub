import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import WebFont from 'webfontloader';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Login from './components/login/Login';
import ForgotPassword from './components/Forgot Password/ForgotPassword';
import ResetPassword from './components/Reset Password/ResetPassword';
import Dashboard from './components/Dashboard/Dashboard';
import Signup from './components/Signup/Signup';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Profile from './components/Profile/Profile';
import UpdatePassword from './components/Update Password/UpdatePassword';
import Help from './components/Help/Help';
import Lessons from './components/Lessons/Lessons';
import { useSelector } from 'react-redux';
import store from './store';
import { loadUser } from './actions/userActions';
import DashboardDetails from './components/Dashboard/DashboardDetails';
import AdminPanel from './components/Admin/AdminPanel';
import CreateDashboard from './components/Admin/CreateDashboard';
import AllDashboard from './components/Admin/AllDashboard';
import AllUsers from './components/Admin/AllUsers';
import AllLessons from './components/Admin/AllLessons';
import CreateLesson from './components/Admin/CreateLesson';
import LessonDetails from './components/Lessons/LessonDetails';
import ContentDetails from './components/Lessons/ContentDetails';
import ContentDetail2 from './components/Lessons/ContentDetail2';
import ContentDetail3 from './components/Lessons/ContentDetail3';
import ContentDetail4 from './components/Lessons/ContentDetail4';
import LessonVideos from './components/Lessons/LessonVideos';
import SubVideo from './components/Lessons/SubVideo';
import LessonGames from './components/Lessons/LessonGames';
import SubGames from './components/Lessons/SubGames';
import Highlight from './components/Highlights/Highlight';
import UpdateDashboard from './components/Admin/UpdateDashboard';
import SubVideo2 from './components/Lessons/SubVideo2';
import SubVideo3 from './components/Lessons/SubVideo3';
import SubVideo4 from './components/Lessons/SubVideo4';
import SubVideo5 from './components/Lessons/SubVideo5';
import SubVideo6 from './components/Lessons/SubVideo6';
import SubGames2 from './components/Lessons/SubGames2';
import SubGames3 from './components/Lessons/SubGames3';
import SubGames4 from './components/Lessons/SubGames4';
import Handouts from './components/Lessons/Handouts';
import UpdateLesson from './components/Admin/UpdateLesson';
import SuperPanel from './components/Super Admin/SuperPanel';
import SuperAllDashboard from './components/Super Admin/SuperAllDasbhboard';
import SuperUpdateDashboard from './components/Super Admin/SuperUpdateDashboard';
import SuperCreateDashboard from './components/Super Admin/SuperCreateDashboard';
import SuperAllUsers from './components/Super Admin/SuperAllUsers';
import SuperUserRole from './components/Super Admin/SuperUserRole';
import SuperAllLessons from './components/Super Admin/SuperAllLessons';
import SuperUpdateLesson from './components/Super Admin/SuperUpdateLesson';
import SuperCreateLesson from './components/Super Admin/SuperCreateLesson';
import MiniFooter from './components/Footer/MiniFooter';
import MiniFoot from './components/Footer/MiniFoot';
import FindInstitute from './components/login/FindInstitute';
import SuperCreateHighlights from './components/Super Admin/SuperCreateHighlights';
import SuperAllHighlights from './components/Super Admin/SuperAllHighlights';
import SuperUpdateHighlight from './components/Super Admin/SuperUpdateHighlight';

function App() {

  const {isAuthenticatedUser , user} = useSelector((state)=>state.loginUser)
  useEffect(()=>{
    WebFont.load({
      google:{
        families:["Futura","Poppins","Roboto"]
      }
    })
    store.dispatch(loadUser());
  },[])
  return (
    <Router>
      <Header/>
      <Routes>
        <Route extact path='/' element={<Login/>} />
        <Route extact path='/sign-up' element={<Signup/>} />
        <Route extact path='/password/forgot' element={<ForgotPassword/>} />
        <Route extact path='/password/reset/:token' element={<ResetPassword/>} />
        <Route extact path='/dashboard' element={isAuthenticatedUser ? <Dashboard/>:<Login/>} />
        <Route extact path='/dashboardDetails/:id' element={isAuthenticatedUser ? <DashboardDetails/>:<Login/>} />
        <Route extact path='/settings' element={isAuthenticatedUser ? <UpdatePassword/>:<Login/>} />
        <Route extact path='/lessons' element={isAuthenticatedUser ? <Lessons/> : <Login />} />
       

         <Route extact path='/*' element={<PageNotFound/>} />
        <Route extact path='/lesson/:id' element={isAuthenticatedUser ? <LessonDetails/> : <Login />} />
        <Route extact path='/content/:id' element={isAuthenticatedUser ? <ContentDetails/> : <Login />} />
        <Route extact path='/content2/:id' element={isAuthenticatedUser ? <ContentDetail2/> : <Login />} />
        <Route extact path='/content3/:id' element={isAuthenticatedUser ? <ContentDetail3/> : <Login />} />
        <Route extact path='/content4/:id' element={isAuthenticatedUser ? <ContentDetail4/> : <Login />} />
        <Route extact path='/video/:id' element={isAuthenticatedUser ? <LessonVideos/> : <Login />} />
        <Route extact path='/sub-video/:id' element={isAuthenticatedUser ? <SubVideo/> : <Login />} />
        <Route extact path='/sub-video3/:id' element={isAuthenticatedUser ? <SubVideo3/> : <Login />} />
        <Route extact path='/sub-video2/:id' element={isAuthenticatedUser ? <SubVideo2/> : <Login />} />
        <Route extact path='/sub-video4/:id' element={isAuthenticatedUser ? <SubVideo4/> : <Login />} />
        <Route extact path='/sub-video5/:id' element={isAuthenticatedUser ? <SubVideo5/> : <Login />} />
        <Route extact path='/sub-video6/:id' element={isAuthenticatedUser ? <SubVideo6/> : <Login />} />
        <Route extact path='/games/:id' element={isAuthenticatedUser ? <LessonGames/> : <Login />} />
        <Route extact path='/sub-game/:id' element={isAuthenticatedUser ? <SubGames/> : <Login />} />
        <Route extact path='/sub-game2/:id' element={isAuthenticatedUser ? <SubGames2/> : <Login />} />
        <Route extact path='/sub-game3/:id' element={isAuthenticatedUser ? <SubGames3/> : <Login />} />
        <Route extact path='/sub-game4/:id' element={isAuthenticatedUser ? <SubGames4/> : <Login />} />
        <Route extact path='/highlights' element={isAuthenticatedUser ? <Highlight/> : <Login />} />
        <Route extact path='/handouts/:id' element={isAuthenticatedUser ? <Handouts/> : <Login />} />
        <Route extact path='/my-profile' element={isAuthenticatedUser ? <Profile/>:<Login/>} />

                    {/* ------    Admin --------*/}

        <Route extact path='/admin-panel' element={isAuthenticatedUser && user.role === "admin"  ? <AdminPanel/> : <Login />} />
        <Route extact path='/admin/dashboard/create' element={isAuthenticatedUser  && user.role === "admin"  ? <CreateDashboard/> : <Login />} />
        <Route extact path='/admin/dashboards' element={isAuthenticatedUser  && user.role === "admin" ? <AllDashboard/> : <Login />} />
        <Route extact path='/admin/dashboards/edit/:id' element={isAuthenticatedUser  && user.role === "admin" ? <UpdateDashboard/> : <Login />} />
        <Route extact path='/admin/users' element={isAuthenticatedUser  && user.role === "admin"  ? <AllUsers/> : <Login />} />
        <Route extact path='/admin/lessons' element={isAuthenticatedUser  && user.role === "admin" ? <AllLessons/> : <Login />} />
        <Route extact path='/admin/lesson/create' element={isAuthenticatedUser  && user.role === "admin"  ? <CreateLesson/> : <Login />} />
        <Route extact path='/admin/lessons/:id' element={isAuthenticatedUser  && user.role === "admin"  ? <UpdateLesson/> : <Login />} />

                    {/* ------   Super Admin ------ */}

        <Route extact path='/super-admin-panel' element={isAuthenticatedUser  && user.role === "super" ? <SuperPanel/> : <Login />} />
        <Route extact path='/super-admin/dashboards' element={isAuthenticatedUser && user.role === "super" ? <SuperAllDashboard/> : <Login />} />
        <Route extact path='/super-admin/dashboards/edit/:id' element={isAuthenticatedUser && user.role === "super" ? <SuperUpdateDashboard/> : <Login />} />
        <Route extact path='/super-admin/dashboard/create' element={isAuthenticatedUser&& user.role === "super"  ? <SuperCreateDashboard/> : <Login />} />
        <Route extact path='/super-admin/users' element={isAuthenticatedUser && user.role === "super"  ? <SuperAllUsers/> : <Login />} />
        <Route extact path='/super-admin/users/edit/:id' element={isAuthenticatedUser && user.role === "super" ? <SuperUserRole/> : <Login />} />
        <Route extact path='/super-admin/lessons' element={isAuthenticatedUser && user.role === "super"  ? <SuperAllLessons/> : <Login />} />
        <Route extact path='/super-admin/lessons/:id' element={isAuthenticatedUser && user.role === "super"  ? <SuperUpdateLesson/> : <Login />} />
        <Route extact path='/super-admin/lesson/create' element={isAuthenticatedUser && user.role === "super"  ? <SuperCreateLesson/> : <Login />} />
        <Route extact path='/super-admin/activity/create' element={isAuthenticatedUser && user.role === "super"  ? <SuperCreateHighlights/> : <Login />} />
        <Route extact path='/super-admin/activities' element={isAuthenticatedUser && user.role === "super"  ? <SuperAllHighlights/> : <Login />} />
        <Route extact path='/super-admin/activities/:id' element={isAuthenticatedUser && user.role === "super"  ? <SuperUpdateHighlight/> : <Login />} />


        <Route extact path='/help' element={<Help/>} />
        <Route extact path='/sad' element={<FindInstitute/>} />
        
      </Routes>
      <MiniFooter/>
      <MiniFoot/>
    </Router>
  
  );
  
}

export default App;
