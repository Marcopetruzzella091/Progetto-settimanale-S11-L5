export const addprefer = (prefer) => {
    return { type: 'ADD_PREFER' , payload: prefer.title }
}

export const addUser = (song) => {
    return { type: 'PLAY_SONG' , payload:song }
}

export const delprefer = (song) => {
    return { type: 'DEL_PREFER' , payload:song }
}