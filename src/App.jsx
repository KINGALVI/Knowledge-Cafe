import { useState } from 'react'
import BlogsList from './Components/Blogs-Components/Blog-List'
import Bookmark from './Components/Bookmarks/Bookmark'
import Header from './Components/Header/Header'

function App() {
  const [Bookmarks , setBookmarks] =useState();

 const handelBooksmarks = Blogs =>{

 }

  return (
    <>

      <Header></Header>

      <section className='md:flex'>
        <BlogsList handelBooksmarks ={handelBooksmarks}></BlogsList>
        <Bookmark></Bookmark>
      </section>

    </>
  )
}

export default App