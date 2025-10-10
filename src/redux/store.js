import {configureStore} from '@reduxjs/toolkit';

import counterReducer from '../components/slice/Counterslice';
import userDetailsReducer from '../components/slice/userDetails';

const store =configureStore({
    reducer :{
        counter: counterReducer,
        userDetails : userDetailsReducer,
    }
})
export default store;
