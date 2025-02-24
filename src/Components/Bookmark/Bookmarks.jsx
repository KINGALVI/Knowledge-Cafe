import PropTypes from "prop-types";
import BookmarksList from "./Bookmarks-List";

const Bookmark = ({ Bookmark }) => {
    return (
        <>
            <section className="md:w-1/3 p-5 bg-gray-300 rounded-xl">
                <h1 className="text-3xl text-center">Bookmarked Blogs : {Bookmark.length}</h1>
                {
                    Bookmark.map(Bookmark => <BookmarksList key={Bookmark.id} Bookmark={Bookmark}></BookmarksList>)
                }
            </section>
        </>
    );
};

Bookmark.propTypes = {
    Bookmark: PropTypes.object
}

export default Bookmark;