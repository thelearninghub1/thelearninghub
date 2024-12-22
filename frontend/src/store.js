import { configureStore} from '@reduxjs/toolkit';
import { allUserReducer, forgotPasswordReducer, loginUserReducer, singleUserDetailsReducer, updateUserPasswordReducer } from './reducers/userReducers';
import { createDasboardReducer, getDashboardDetailsReducer, getDashboardReducer } from './reducers/dashboardReducers';
import { allLessonsReducer, createLessonReducer, deletelessonReducer, lessonDetailsReducer } from './reducers/lessonsReducer';
import { allHighlightsReducer, createHighlightsReducer, highlightDetailsReducer } from './reducers/highlightReducers';


const store = configureStore({
    reducer:{
        loginUser:loginUserReducer,
        forgotPassword:forgotPasswordReducer,
        dashboard:getDashboardReducer,
        dashboardDetails:getDashboardDetailsReducer,
        updatePassword:updateUserPasswordReducer,
        createDashboard:createDasboardReducer,
        allUsers:allUserReducer,
        allLessons:allLessonsReducer,
        lessonDetails:lessonDetailsReducer,
        createLesson:createLessonReducer,
        getSingleUser:singleUserDetailsReducer,
        deleteLesson:deletelessonReducer,
        createHighlights:createHighlightsReducer,
        allHightlights:allHighlightsReducer,
        highlightDetails:highlightDetailsReducer
    }
});

export default store;