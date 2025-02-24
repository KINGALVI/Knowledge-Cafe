import { useState } from 'react'
import BlogsList from './Components/Blogs-Components/Blog-List'
import Bookmarks from './Components/Bookmark/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [Bookmark, setBookmarks] = useState([]);

  const handelBooksmarks = Blogs => {
    const newBookmarks = [...Bookmark, Blogs]
    setBookmarks(newBookmarks)
  }

  return (
    <>

      <Header></Header>

      <section className='md:flex'>
        <BlogsList handelBooksmarks={handelBooksmarks}></BlogsList>
        <Bookmarks Bookmark={Bookmark}></Bookmarks>
      </section>

    </>
  )
}

export default App