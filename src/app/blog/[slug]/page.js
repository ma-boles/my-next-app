import styles from "./singlePost.module.css";

export default function SinglePostPage () {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                Image
            </div>
            <div className={styles.textContainer}>
                <h1>Title</h1>
                <p>Desc</p>
            </div>  
        </div>
        </>
    )
}