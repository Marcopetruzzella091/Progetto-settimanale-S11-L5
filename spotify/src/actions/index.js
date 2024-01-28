export const deleteUser = (user) => {
    return { type: 'REMOVE_USER' , payload: user }
}

export const addUser = (song) => {
    return { type: 'PLAY_SONG' , payload:song }
}