import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  Songs: [],
  loading: false,
  error: ""
} 

export const getAllUsers = createAsyncThunk("users/fetch", async () => {
    // Soluzione 1
    const response = await fetch(' https://striveschool-api.herokuapp.com/api/deezer/search?q=madonna')
    if(!response.ok) { throw new Error(response.statusText)}
    return response.json()

    
      
})

export const usersSlice = createSlice(
    {
      name: 'users',
      initialState: initialState,
  
      reducers: (create) =>
       ({
        addUser: create.reducer((state, action) => {
          console.log(action);
          state.Songs.push(action.payload)
        }),
        
      }),
  
      
    }
  )
  
  const { reducer, actions } = usersSlice;
  export const { addUser, deleteUser } = actions;
  export default reducer