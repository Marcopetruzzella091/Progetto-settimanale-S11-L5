import { createStore } from 'redux'
import storeReducer from '../reducers';


const initialState = 
  {
    playsong:"Nessun Brano in riproduzione",
    
  }
  
;

// createStore(storeReducer, initialState?, middleware?)
export const store = createStore(storeReducer, initialState) 