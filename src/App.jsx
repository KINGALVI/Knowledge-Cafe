import { useState } from 'react'
import BlogsList from './Components/Blogs/Blog-List'
import Bookmarks from './Components/Bookmark/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [Bookmark, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handelBooksmarks = Blogs => {
    const newBookmarks = [...Bookmark, Blogs]
    setBookmarks(newBookmarks)
  }
  const handelMarkAsRead = time => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  }

  return (
    <>

      <Header></Header>

      <section className='md:flex'>
        <BlogsList handelBooksmarks={handelBooksmarks} handelMarkAsRead={handelMarkAsRead}></BlogsList>
        <Bookmarks Bookmark={Bookmark} readingTime={readingTime}></Bookmarks>
      </section>

    </>
  )
}

export default App