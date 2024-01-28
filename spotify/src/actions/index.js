export const addprefer = (prefer) => {
    return { type: 'ADD_PREFER' , payload: prefer.title }
}

export const addUser = (song) => {
    return { type: 'PLAY_SONG' , payload:song }
}