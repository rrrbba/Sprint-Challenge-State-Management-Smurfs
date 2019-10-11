import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, ADD_SMURF, ADD_SUCCESS } from '../actions';



const initialState = {
    smurfInfo: [],
    isFetching: false, 
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_SUCCESS:
            return {
                ...state, 
                isFetching: false,
                error: '',
                smurfInfo: action.payload
            };
        case FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case ADD_SMURF :
            return{
                ...state,
            }
        case ADD_SUCCESS: 
            return{
                ...state,
                smurfInfo: [...state.smurfInfo, action.payload]
            }
        default: return state;
    }
}

export default reducer;