import React from "react";
import styles from "../blog/blog.module.css";
import PostCard from "@/components/postcard/postCard";
import { getPosts } from "@/lib/data";

/*const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if(!res.ok) {
        throw new Error("Something went wrong");
    }
    return res.json();
}*/

const BlogPage = async () => {

    /*const posts = await getData()*/

    const posts = await getPosts();
    return (
        <>
        <div className={styles.container}>
            {posts.map((post) => 
                <div className={styles.post} key={post.id}>
                    <PostCard post={post}/>
                </div>
            )}
            
            
        </div>
        </>
    )
}

export default BlogPage;