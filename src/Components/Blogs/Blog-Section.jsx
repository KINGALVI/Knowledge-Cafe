// Import PropTypes for type checking
import PropTypes from 'prop-types';

// Import FontAwesome for the bookmark icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

/**
 * BlogSection Component - Displays individual blog details
 * @param {Object} Blogs - Blog data including author, title, image, and hashtags
 * @param {Function} handleBookmarks - Function to bookmark a blog
 * @param {Function} handleMarkAsRead - Function to mark a blog as read
 */
const BlogSection = ({ Blogs, handleBookmarks, handleMarkAsRead }) => {
    // Destructuring blog properties for easy access
    const { id, cover_image, author_image, author_name, posted_date, reading_time, cover, hashtags } = Blogs;

    return (
        <>
            {/* Blog Container */}
            <section className="m-10 pl-20">

                {/* Blog Cover Image */}
                <img src={cover_image} alt={`Cover of ${cover}`} />

                {/* Author and Reading Time Info */}
                <div className="flex justify-between items-center m-5">
                    <div className="flex items-center">
                        {/* Author Profile Image */}
                        <img className="h-40 w-40" src={author_image} alt={`Author ${author_name}`} />

                        {/* Author Details */}
                        <div className="m-5">
                            <p><b>{author_name}</b></p>
                            <p>{posted_date}</p>
                        </div>
                    </div>

                    {/* Bookmark and Reading Time Button */}
                    <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => handleBookmarks(Blogs)}
                    >
                        <p>{reading_time} Minutes</p>
                        <FontAwesomeIcon className="h-5 w-5" icon={faBookmark} />
                    </div>
                </div>

                {/* Blog Title */}
                <h2 className="text-4xl font-bold m-5">{cover}</h2>

                {/* Blog Hashtags */}
                <div className="tracking-widest m-5">
                    {hashtags.split(' ').map((tag, index) => (
                        <span key={index} className="text-blue-500 mr-2">{tag}</span>
                    ))}
                </div>

                {/* Mark as Read Button */}
                <button
                    onClick={() => handleMarkAsRead(reading_time, id)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5"
                >
                    MARK AS READ
                </button>
            </section>
        </>
    );
};

// Define PropTypes for type safety and validation
BlogSection.propTypes = {
    // `Blogs` should be an object containing blog details
    Blogs: PropTypes.shape({
        id: PropTypes.number.isRequired, // Unique blog ID (must be a number)
        cover_image: PropTypes.string.isRequired, // URL/path to the blog's cover image (must be a string)
        author_image: PropTypes.string.isRequired, // URL/path to the author's profile image (must be a string)
        author_name: PropTypes.string.isRequired, // Author's name (must be a string)
        posted_date: PropTypes.string.isRequired, // Date when the blog was published (must be a string)
        reading_time: PropTypes.number.isRequired, // Estimated reading time in minutes (must be a number)
        cover: PropTypes.string.isRequired, // Blog title or heading (must be a string)
        hashtags: PropTypes.string.isRequired // Hashtags related to the blog (must be a string)
    }).isRequired, // `Blogs` is required and must have the defined structure

    handleBookmarks: PropTypes.func.isRequired, // Function to bookmark a blog (must be a function)
    handleMarkAsRead: PropTypes.func.isRequired // Function to mark a blog as read (must be a function)
};

export default BlogSection;