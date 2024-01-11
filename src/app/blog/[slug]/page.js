import styles from "./singlePost.module.css";
import Image from "next/image";


export default function SinglePostPage () {
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
    )
}