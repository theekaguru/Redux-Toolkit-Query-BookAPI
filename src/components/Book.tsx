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
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody></tbody>
      </table>

    </div>
  )
}
