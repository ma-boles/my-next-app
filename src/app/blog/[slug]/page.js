import styles from "./singlePost.module.css";
import { getPost } from "@/lib/data";
import Image from "next/image";


const SinglePostPage = async ({ params }) => {
    const { slug } = params;

    const post = await getPost(slug);

    return (
        <>
        <div className={styles.container}>
            <div className={styles.imageContainer}>
               image
            </div>
            <div className={styles.textContainer}>
                <h1>title</h1>
                <p>body</p>
            </div>  
        </div>
        </>
    );
};

export default SinglePostPage;