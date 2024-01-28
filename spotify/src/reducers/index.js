// storeReducer(initialState, action)
export default function storeReducer(state = [], action) {
  
    console.log(action)

    switch (action.type) {
        case 'REMOVE_USER':
          return state.filter(u => u.email !== action.payload.email)
        case 'PLAY_SONG':
          return {...state , playsong : action.payload}
    
        default:
            break;
    }

    return state;
}
