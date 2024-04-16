import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut, setError } from '../auth/authSlice'
import { setShowLoader } from '../loader/loaderSlice'

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8080',

    prepareHeaders: (headers, { getState }) => {
        // @ts-ignore
        const token = getState()?.auth?.token

        if (token) {
            // headers.set("authorization", `Bearer ${token}`)
            // headers.set("Access-Control-Allow-Origin", `*`)
            // headers.set("Access-Control-Allow-Methods", `GET, POST, OPTIONS, PUT, DELETE`)
            // headers.set("Access-Control-Allow-Headers", `Content-Type, Access-Control-Allow-Headers, X-Requested-With`)
            // headers.set("Content-Type", 'application/json')
        }
        return headers
    }
})

// @ts-ignore
const baseQueryWithReauth = async (args, api, extraOptions) => {
    api.dispatch(setShowLoader(true))
    let result = await baseQuery(args, api, extraOptions)
    setInterval(() => {
        api.dispatch(setShowLoader(false))

    }, 1000)

    // @ts-ignore
    if (result?.data?.responseHeader?.status === 'F') {
        // @ts-ignore
        api.dispatch(setError({ ...result?.data.responseHeader }))
    }
    if (result?.error?.status === 403) {
        // @ts-ignore
        navigator('login')
    }

    // @ts-ignore
    if (result?.error?.originalStatus === 403) {
        console.log('sending refresh token')
        // send refresh token to get new access token 
        const refreshResult = await baseQuery('/refresh', api, extraOptions)
        if (refreshResult?.data) {
            const user = api.getState().auth.user
            // store the new token 
            api.dispatch(setCredentials({ ...refreshResult.data, user }))
            // retry the original query with new access token 
            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(logOut())
        }
    }

    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: () => ({})
})