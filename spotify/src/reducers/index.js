// storeReducer(initialState, action)
export default function storeReducer(state , action) {
  
    console.log(action)

    switch (action.type) {
        case 'ADD_PREFER':
          return {
            ...state,
            favourite: [...state.favourite, action.payload]
        }
        case 'PLAY_SONG':
          return {...state , playsong : action.payload.title , 
            duration: action.payload.duration ,
          cover : action.payload.album.cover_small
        }
    
        default:
            break;
    }

    return state;
}
