import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';


const BlogSection = ({ Blogs, handelBooksmarks, handelMarkAsRead }) => {
    const { cover_image, author_image, author_name, posted_date, reading_time, cover, hashtags } = Blogs
    return (
        <>
            <section className='m-10 pl-20'>
                <img src={cover_image} alt="" />
                <div className='flex justify-between items-center m-5'>
                    <div className='flex items-center'>
                        <img className='h-40 w-40' src={author_image} alt="" />
                        <div className='m-5'>
                            <p><b>{author_name}</b></p>
                            {posted_date}
                        </div>
                    </div>
                    <div className='flex items-center gap-2' onClick={() => handelBooksmarks(Blogs)}>
                        <p>{reading_time} Minutes</p>
                        <FontAwesomeIcon className='h-5 w-5' icon={faBookmark} />
                    </div>
                </div>
                <h2 className='text-4xl font-bold m-5'> {cover}</h2>
                <div className='tracking-widest m-5'> {hashtags} </div>
                <button
                    onClick={() => handelMarkAsRead(reading_time)}
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5'>MARK AS READ</button>
            </section>
        </>
    );
};

BlogSection.propTypes = {
    Blogs: PropTypes.object,
    handelBooksmarks: PropTypes.func,
    handelMarkAsRead: PropTypes.func
}

export default BlogSection;