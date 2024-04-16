import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: 'auth',
    initialState: { position: '', user: null },
    reducers: {
        setCredentials: (state, action) => {
            const { user, sessionId } = action.payload
            state.user = user
            state.position = 'Developer'
            state.position = 'Developer'
            // @ts-ignore
            state.sessionId = sessionId
            // @ts-ignore
            state.isAdmin = true
        },
        logOut: (state) => {
            state.user = null
            // @ts-ignore
            state.sessionId = null
        },
    
    },
})

export const { setCredentials, logOut} = authSlice.actions

export default authSlice.reducer

// @ts-ignore
export const selectCurrentUser = (state) => state.auth.user
// @ts-ignore
export const selectCurrentToken = (state) => state.auth.token


