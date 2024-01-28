import { createStore } from 'redux'
import storeReducer from '../reducers';


const initialState =  {
 cover:"",
 duration:"00",
 playsong:"nessuna brano in riproduzione",
 favourite: []
}
 
  
;

// createStore(storeReducer, initialState?, middleware?)
export const store = createStore(storeReducer, initialState) 