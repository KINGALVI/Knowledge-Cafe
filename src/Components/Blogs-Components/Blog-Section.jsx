import PropTypes from 'prop-types';


const BlogSection = ({ Blogs }) => {
    const { author_name } = Blogs
    return (
        <>
            {author_name}
        </>
    );
};

BlogSection.propTypes = {
    Blogs: PropTypes.object
}

export default BlogSection;