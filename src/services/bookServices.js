import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const bookService = createApi({
    reducerPath:'book',
    tagTypes:['book'],
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:3001'
    }),
    endpoints:(builder)=>({
        getBooks: builder.query({
            query:()=>({
                url:'books',
                method:'GET'
            }),
            providesTags:['book']
        }),
       createBook:builder.mutation({
           query:(data)=>({
               headers:{
                'Content-type': 'application/json',
               },
               url:'books',
               method:'POST',
               body:data
           }),
           invalidatesTags:['book']
       }),
       deleteBook:builder.mutation({
           query:(id)=>({
               url:`books/${id}`,
               method:'DELETE'
           }),
           invalidatesTags:['book']
       })
    })
})

export const { useGetBooksQuery,useCreateBookMutation,useDeleteBookMutation } = bookService;