// Import necessary hooks from React
import { useEffect, useState } from "react";

// Import PropTypes for type checking
import PropTypes from 'prop-types';

// Import BlogSection component for rendering individual blog posts
import BlogSection from "./Blog-Section";

const BlogsList = ({ handleBookmarks, handleMarkAsRead }) => {
    // State to store fetched blog data
    const [blogsData, setBlogsData] = useState([]);

    // Fetch blog data when the component mounts
    useEffect(() => {
        fetch('/App.json') // Fetch data from the JSON file
            .then(response => response.json()) // Convert response to JSON format
            .then(data => setBlogsData(data)) // Store the fetched data in state
            .catch(error => console.error("Failed to fetch data:", error)); // Error handling
    }, []);

    return (
        <>
            {/* Container for blog list */}
            <section className="md:w-2/3">
                {/* Map through blogsData array and render BlogSection for each item */}
                {blogsData.map((blog) => (
                    <BlogSection
                        key={blog.id} // Use a unique key to avoid rendering issues
                        Blogs={blog}
                        handleBookmarks={handleBookmarks}
                        handleMarkAsRead={handleMarkAsRead}
                    />
                ))}
            </section>
        </>
    );
};

// Define PropTypes to ensure correct prop usage
BlogsList.propTypes = {
    handleBookmarks: PropTypes.func.isRequired, // Function for adding bookmarks
    handleMarkAsRead: PropTypes.func.isRequired // Function for marking blog as read
};

export default BlogsList;