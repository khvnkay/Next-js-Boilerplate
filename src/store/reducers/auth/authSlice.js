import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: 'auth',
    initialState: { position: '', user: null, success: true, errorMessage: '' },
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
        setError: (state, action) => {
            const { status, message } = action.payload
            state.success = status === 'S'
            state.errorMessage = message
        },
        clearError: (state) => {
            state.success = true
            state.errorMessage = ''
        },
    },
})

export const { setCredentials, logOut, setError, clearError } = authSlice.actions

export default authSlice.reducer

// @ts-ignore
export const selectCurrentUser = (state) => state.auth.user
// @ts-ignore
export const selectCurrentToken = (state) => state.auth.token
// @ts-ignore
export const selectCurrentStatus = (state) => state.auth.success
// @ts-ignore
export const selectCurrentErrorMessage = (state) => state.auth.errorMessage


