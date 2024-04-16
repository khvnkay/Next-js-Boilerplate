import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '../auth/authSlice'

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://pantip.com/api/forum-service',

    // https://pantip.com/api/forum-service/home/get_sidebar_content
    prepareHeaders: (headers) => {
        headers.set("accept", `application/json, text/plain, */*`)
        headers.set("ptauthorize", `Basic dGVzdGVyOnRlc3Rlcg==`)
        headers.set("Access-Control-Allow-Methods", `GET, POST, OPTIONS, PUT, DELETE`)
        headers.set("Access-Control-Allow-Headers", `Content-Type, Access-Control-Allow-Headers, X-Requested-With`)
        headers.set("Content-Type", 'application/json')
        headers.set("cookie", "PHPSESSID=2kj7lnjr19khkmpopaukdsrdv7; pantip_visitc=sbesei367ia7gOw28FOl; ka_iid=9zxdAqyGeRAmMuXJTJVP4D; _cc_id=2d8f8f2437e073b96e3a8a9c9aa8cfe; panoramaId_expiry=1713447051076; panoramaId=61bdccfe2b8f124ff0d1eb87b1ca4945a702284b8b69e9413b667bb80b66c72a; panoramaIdType=panoIndiv; _gid=GA1.2.227286357.1713181990; rlr=30595926; FCNEC=%5B%5B%22AKsRol_d0HzfTE3S70Xk_VRwkOUSQIxmIR4acahp1298wwYZqeUM5_pkN0nHOfAKu_QrxaUnQ6xVaQphNnZToAhg0-0ZzUTSFYHPZh3AS5s2gld0jOYlzVeaSekZ4mt4yabOGOeu25qOIo4C84TjyQ3hq86p87vKfA%3D%3D%22%5D%5D; ptpolicy=1; pantip_sessions=c%2BjLht07Ln05jvZ7NbeZGxrvvfUn1ertgYUQrp%2BCVfW%2BGkPGCybEQwijoRTAmlFtCaFlUMO3OkWKGq68cNHiycPyAFD7jd3U6%2FstGIkXkfRWRGNuSeNnddT9FBgl9ieqT2Xg%2BtxGYJMZetYKokHyt0Lk3o90isMizrRbPzyQxqP5AlMrCp0r7pu5Nu8rQBh5zXMnxaDMkM4gYwRIvUz%2Foq7NTBY%2FD0w7N7i%2FE%2FmcvZDIWXH6VGbWNN5g5atAb67RCg%2F6aiNvNYWG%2FwXBaRmQC52SWa4QR7uMUaFSCjFmP9qxzyYYHRGOJXKVuyTDsRxx5s%2BDPQLdeV3lNAAuGnf4Qw%3D%3D; real_referer=%3A%2F%2Fpantip.com%2Fs%2FxjwFZ; _dc_gtm_UA-10478864-2=1; _ga=GA1.1.261358788.1712218702; ka_sid=WXK5KqURWWAzRJ6ecAveiP; _ga_ZMC2WGXL4Z=GS1.1.1713267649.21.0.1713267665.44.0.0")
     
        return headers
    }
})

// @ts-ignore
const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
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