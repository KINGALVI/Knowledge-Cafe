import PropTypes from "prop-types";

const BookmarksList = ({ Bookmark }) => {
    const { cover } = Bookmark
    return (
        <div className="bg-slate-200 p-4 m-4 rounded-xl">
            <h1 className="text-2xl">{cover}</h1>
        </div>
    );
};

BookmarksList.propTypes = {
    Bookmark: PropTypes.object
}

export default BookmarksList;