import {useForm} from "react-hook-form"
import { bookApi } from "./features/api/bookApi";

interface BookFormInput{
  bookTitle:string;
  bookAuthor:string;
  bookYear:number;
  bookGenre:string
 
}

interface TBook{
  bookId:number;
  bookTitle:string;
  bookAuthor:string;
  bookYear:number;
  bookGenre:string;

}

export const Book = () => {
  const {register , handleSubmit , reset , formState:{errors}} = useForm<BookFormInput>()

  const {data:bookData =[], isLoading} =bookApi.useGetAllBooksQuery({})

 //way 2 const {data:bookData =[], isLoading} =bookApi.endpoints.getAllBooks.useQuery({})
  console.log(bookData)


  const onSubmit =() =>{

  }

  const handleDelete = (bookId:number) =>{

  }
  
  const handleUpdate = () =>{
    
  }
  
  return (
    <div className='app'>
      <h3>Book Repository</h3>

      <form className='Book-Form' onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Book Title" {...register('bookTitle',{required:true})}/>
        {errors.bookTitle && <span style={{color:'red'}}>Book Title is Required</span>}

        <input type="text" placeholder="Book Author" {...register('bookAuthor',{required:true})}/>
        {errors.bookAuthor && <span style={{color:'red'}}>Book Author is Required</span>}

        <input type="text" placeholder="book Year" {...register('bookYear',{required:true})}/>
        {errors.bookYear && <span style={{color:'red'}}>Book Year is Required</span>}

        <input type="text" placeholder="book Genre " {...register('bookGenre',{required:true})}/>
        {errors.bookGenre && <span style={{color:'red'}}>Book Genre is Required</span>}
         
        <button type="submit">ADD BOOK</button>
         
      </form>
      {
        isLoading ? (
          <div className="loading">
            loading ...
          </div>
        ):bookData?.length === 0 ? (
          <div>
            No Books Available 🙃🙃
          </div>
        ):(
          <table className="book-table">

        <thead>
          <tr>
            <td>Book Id</td>
            <td>Book Title</td>
            <td>Book Author</td>
            <td>Book Year</td>
            <td>Book Genre</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {/*  remove ststic data and pass the actual data if there */}
          {
            bookData ?.map((book:TBook) =>(
              <tr key={book.bookId}>
                <td>{book.bookId}</td>
                <td>{book.bookTitle}</td>
                <td>{book.bookAuthor}</td>
                <td>{book.bookYear}</td>
                <td>{book.bookGenre}</td>
                <td>
                  <button onClick={()=>handleDelete(book.bookId)}>Delete</button>
                  <button onClick={()=>handleUpdate(book)}>Update</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
        )
      }

    </div>
  )
}
