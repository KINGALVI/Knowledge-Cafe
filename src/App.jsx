import BlogsList from './Components/Blogs-Components/Blog-List'
import Bookmark from './Components/Bookmarks/Bookmark'
import Header from './Components/Header/Header'

function App() {

  return (
    <>

      <Header></Header>

      <section className='md:flex'>
        <BlogsList></BlogsList>
        <Bookmark></Bookmark>
      </section>

    </>
  )
}

export default App