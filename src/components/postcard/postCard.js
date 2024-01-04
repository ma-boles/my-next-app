import styles from "./postCard.module.css";
import Link from "next/link";

export default function PostCard () {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imageContainer}>
                    <h1>image</h1>
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1>Title</h1>
                <p>Desc</p>
                <p>READ MORE</p>
            </div>
        </div>
        
        </>
    )
}