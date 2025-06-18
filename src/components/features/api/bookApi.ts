import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
    reducerPath:'bookApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:5000/api/'}),
    tagTypes:['Books'],
    endpoints:(builder) =>({
        //getALLBooks
        getAllBooks:builder.query({
            query: () => 'books',
            providesTags:['Books']
        }),

        //Delete Booke By Id
        deleteBookById:builder.mutation({
            query:(bookId) =>({
                url:`books/${bookId}` ,
                method:'DELETE'
            }),
            invalidatesTags:['Books']
        }),
        addBook:builder.mutation({
            query:(AddBookPayLoad) =>({
                url:'books',
                method:'POST',
                body:AddBookPayLoad
            }),
            invalidatesTags:['Books']
        })

    })
})