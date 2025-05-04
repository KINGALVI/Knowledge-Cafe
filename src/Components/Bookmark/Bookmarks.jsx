// Import PropTypes for type checking
import PropTypes from "prop-types";

// Import BookmarksList component to render individual bookmarked blogs
import BookmarksList from "./Bookmarks-List";

/**
 * Bookmark Component - Displays bookmarked blogs and total reading time
 * @param {Array} bookmarks - List of bookmarked blogs
 * @param {Number} readingTime - Total reading time of marked blogs
 */
const Bookmark = ({ bookmarks, readingTime }) => {
    return (
        <>
            {/* Container for bookmarked blogs */}
            <section className="md:w-1/3 p-3 bg-gray-300 rounded-xl">

                {/* Displays total reading time */}
                <h1 className="text-4xl text-center">
                    Reading Time: {readingTime} Minutes
                </h1>

                {/* Spacer for better UI structure */}
                <br /><br />

                {/* Displays number of bookmarked blogs */}
                <h1 className="text-3xl text-center">
                    Bookmarked Blogs: {bookmarks.length}
                </h1>

                {/* Render each bookmarked blog using BookmarksList */}
                {bookmarks.length > 0 ? (
                    bookmarks.map((bookmark) => (
                        <BookmarksList key={bookmark.id} Bookmark={bookmark} />
                    ))
                ) : (
                    <p className="text-center mt-4 text-gray-600">No bookmarks added yet.</p>
                )}

            </section>
        </>
    );
};

// Define PropTypes for type safety
Bookmark.propTypes = {
    // Ensure bookmarks is an array of objects with required properties
    bookmarks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired, // Blog ID must be a number
            cover: PropTypes.string.isRequired // Blog title must be a required string
        })
    ).isRequired,

    // Ensure readingTime is a number
    readingTime: PropTypes.number.isRequired
};

export default Bookmark;