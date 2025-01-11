import { useEffect, useState } from "react";
import BlogSection from "./Blog-Section";

const BlogsList = () => {

    const [API, laodAPI] = useState([]);

    useEffect(() => {
        fetch('/src/App.json')
            .then(response => response.json())
            .then(Data => laodAPI(Data))
    }, [])

    return (
        <>
            {API.map(Blog => <BlogSection key={Blog.id} Blogs={Blog}></BlogSection>)}
        </>
    );

};

export default BlogsList;