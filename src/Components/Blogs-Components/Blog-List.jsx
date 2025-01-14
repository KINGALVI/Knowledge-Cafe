import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import BlogSection from "./Blog-Section";

const BlogsList = ({ handelBooksmarks }) => {

    const [API, laodAPI] = useState([]);

    useEffect(() => {
        fetch('/src/App.json')
            .then(response => response.json())
            .then(Data => laodAPI(Data))
    }, [])

    return (
        <>
            <section className="md:w-2/3">
                {API.map(Blog => <BlogSection key={Blog.id} Blogs={Blog} handelBooksmarks={handelBooksmarks}></BlogSection>)}
            </section>
        </>
    );

};

BlogsList.propTypes = {
    handelBooksmarks: PropTypes.func
}

export default BlogsList;