// Import PropTypes for type checking
import PropTypes from "prop-types";

/**
 * BookmarksList Component - Displays a bookmarked blog
 * @param {Object} Bookmark - The bookmarked blog object containing its title
 */
const BookmarksList = ({ Bookmark }) => {
    // Extracting 'cover' property from the Bookmark object
    const { cover } = Bookmark;

    return (
        <>
            {/* Container for displaying a bookmarked blog */}
            <div className="bg-slate-200 p-4 m-4 rounded-xl">
                {/* Blog title or heading */}
                <h1 className="text-2xl text-center">{cover}</h1>
            </div>
        </>
    );
};

// Define PropTypes for type safety
BookmarksList.propTypes = {
    Bookmark: PropTypes.shape({
        cover: PropTypes.string.isRequired // Ensure 'cover' is always a required string
    }).isRequired
};

export default BookmarksList;