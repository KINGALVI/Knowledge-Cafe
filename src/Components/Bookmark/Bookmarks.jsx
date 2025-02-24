import PropTypes from "prop-types";
import BookmarksList from "./Bookmarks-List";

const Bookmark = ({ Bookmark, readingTime }) => {
    return (
        <>
            <section className="md:w-1/3 p-3 bg-gray-300 rounded-xl">

                <h1 className="text-4xl text-center">Reading Time : {readingTime} Minutes</h1>
                <br /><br />
                <h1 className="text-3xl text-center">Bookmarked Blogs : {Bookmark.length}</h1>

                {
                    Bookmark.map(Bookmark => <BookmarksList key={Bookmark.id} Bookmark={Bookmark}></BookmarksList>)
                }

            </section>
        </>
    );
};

Bookmark.propTypes = {
    Bookmark: PropTypes.array,
    readingTime: PropTypes.number

}

export default Bookmark;