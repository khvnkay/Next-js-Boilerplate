import { apiSlice } from "../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/api/v2/xxx',
                method: 'POST',
                mode: "cors",
                body: {
                    requestBody:
                        { ...credentials }
                }
            })
        }),
        createUser: builder.mutation({
            query: credentials => ({
                url: '/api/v2/xxx',
                method: 'POST',
                mode: "cors",
                body: {
                    "requestHeader": {
                        "sessionId": credentials?.requestHeader?.sessionId
                    },
                    requestBody:
                        { ...credentials.requestBody }
                }
            })
        }),
    })
})

export const {
    useLoginMutation,
    useCreateUserMutation
} = authApiSlice