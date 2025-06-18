import {useForm} from "react-hook-form"

interface BookFormInput{
  bookTitle:string;
  bookAuthor:string;
  bookYear:number;
  bookGenre:string
 
}

export const Book = () => {
  const {register , handleSubmit , reset , formState:{errors}} = useForm<BookFormInput>()


  const onSubmit =() =>{

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
          <tr>
            <td>1</td>
            <td>The GamersKlan</td>
            <td>kaguru Prints</td>
            <td>2025</td>
            <td>Wanna Game!🔥</td>
            <td>
              <button>Delete</button>
              <button>Update</button>
            </td>

          </tr>
        </tbody>
      </table>

    </div>
  )
}
