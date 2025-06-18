import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
    reducerPath:'bookApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:5000/api/'}),
    endpoints:(builder) =>({
        //getALLBooks
        getAllBooks:builder.query({
            query: () => 'books'
        }),

        //Delete Booke By Id
        deleteBookById:builder.mutation({
            query:(bookId) =>({
                url:`books/${bookId}` ,
                method:'DELETE'
            })
        }),
        addBook:builder.mutation({
            query:(AddBookPayLoad) =>({
                url:'books',
                method:'POST',
                body:AddBookPayLoad
            })
        })

    })
})