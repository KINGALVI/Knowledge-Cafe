// Import React state management
import { useState } from 'react';

// Import PropTypes for type checking
import PropTypes from 'prop-types';

// Import components used in the app
import BlogsList from './Components/Blogs/Blog-List';
import Bookmarks from './Components/Bookmark/Bookmarks';
import Header from './Components/Header/Header';

function App() {
  // State to store bookmarked blogs
  const [bookmarks, setBookmarks] = useState([]);

  // State to track total reading time
  const [readingTime, setReadingTime] = useState(0);

  /**
   * Function to add a blog to bookmarks
   * @param {Object} blog - The blog object to be bookmarked
   */
  const handleBookmarks = (blog) => {
    // Prevent duplicates by checking if the blog is already bookmarked
    if (!bookmarks.some((item) => item.id === blog.id)) {
      setBookmarks([...bookmarks, blog]);
    }
  };

  /**
   * Function to mark a blog as read
   * @param {number} time - The reading time of the blog
   * @param {number} id - The blog ID to be removed from bookmarks
   */
  const handleMarkAsRead = (time, id) => {
    // Update total reading time
    setReadingTime((prevTime) => prevTime + time);

    // Remove the blog from bookmarks after marking it as read
    const remainingBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  };

  return (
    <>
      {/* Header Component - Displays the site title */}
      <Header />

      {/* Main Content Area */}
      <section className="md:flex">
        {/* Blog List Component - Displays all available blogs */}
        <BlogsList handleBookmarks={handleBookmarks} handleMarkAsRead={handleMarkAsRead} />

        {/* Bookmarks Component - Displays bookmarked blogs and total reading time */}
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
      </section>
    </>
  );
}

// Define PropTypes for type checking
App.propTypes = {
  bookmarks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // Blog ID must be a required number
      cover: PropTypes.string.isRequired, // Blog cover title must be a required string
    })
  ),
  readingTime: PropTypes.number, // Reading time should be a number
};

export default App;