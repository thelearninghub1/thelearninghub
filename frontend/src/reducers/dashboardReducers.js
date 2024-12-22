import { GET_DASHBOARD_FAIL , GET_DASHBOARD_REQUEST , GET_DASHBOARD_SUCCESS , CLEAR_ERRORS, DASHBOARD_DETAILS_REQUEST, DASHBOARD_DETAILS_SUCCESS, DASHBOARD_DETAILS_FAIL, CREATE_DASHBOARD_REQUEST, CREATE_DASHBOARD_SUCCESS, CREATE_DASHBOARD_FAIL, CREATE_DASHBOARD_RESET, DELETE_DASHBOARD_REQUEST, DELETE_DASHBOARD_SUCCESS, DELETE_DASHBOARD_FAIL, DELETE_DASHBOARD_RESET, UPDATE_DASHBOARD_REQUEST, UPDATE_DASHBOARD_SUCCESS, UPDATE_DASHBOARD_FAIL, UPDATE_DASHBOARD_RESET } from "../constants/dashboardConstants";


// Get All Dashboard Data
export const getDashboardReducer = (state={dashboards:[]}, action) => {
    switch (action.type) {
        case GET_DASHBOARD_REQUEST:
            return {
                ...state,
                loading: true,
                dashboards:[]
            }
        case GET_DASHBOARD_SUCCESS:
            return {
                ...state,
                loading: false,
                dashboards:action.payload.dashboards
            };
        case GET_DASHBOARD_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
                
            }     
        case CLEAR_ERRORS:
            return {
                ...state,
                error:null
            }    
    
        default:
            return state;
    }
};



// Get Dashboard Details 
export const getDashboardDetailsReducer = (state={dashboard:{}}, action) => {
    switch (action.type) {
        case DASHBOARD_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case DASHBOARD_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                dashboard: action.payload.dashboard
            }    
        case DASHBOARD_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }    
        case CLEAR_ERRORS:
            return {
                ...state,
                error:null
            }    
    
        default:
           return state; 
    }
};


// Create Dashboard --Admin
export const createDasboardReducer = (state= {dashboard:{}},action) => {
    switch (action.type) {
        case CREATE_DASHBOARD_REQUEST:
            case DELETE_DASHBOARD_REQUEST:
                case UPDATE_DASHBOARD_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CREATE_DASHBOARD_SUCCESS:
            return {
                ...state,
                loading: false,
                dashboard:action.payload.dashboard,
                success: action.payload.success
            }  
        case DELETE_DASHBOARD_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload.success,
                message: action.payload.message
            } 
            case UPDATE_DASHBOARD_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload.success,
            }      

        case CREATE_DASHBOARD_FAIL:
            case DELETE_DASHBOARD_FAIL:
                case UPDATE_DASHBOARD_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }  
        case CREATE_DASHBOARD_RESET:
            case UPDATE_DASHBOARD_RESET:
            return {
                ...state,
                loading: false,
                success: false,
            }     
        case DELETE_DASHBOARD_RESET:
            return {
                ...state,
                loading: false,
                success: false,
                message:null
            }   
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }     
    
        default:
            return state;
    }
}