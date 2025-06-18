import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
    reducerPath:'bookApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:5000/api/'}),
    endpoints:(builder) =>({
        //getALLBooks
        getAllBooks:builder.query({
            query: () => 'books'
        })

    })
})