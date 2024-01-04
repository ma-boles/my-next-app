import styles from "../blog/blog.module.css";
import PostCard from "@/components/postcard/postCard";

export default function BlogPage () {
    return (
        <>
        <div className={styles.container }>
            <div className={styles.post}>
                <PostCard />
            </div>
            <div className={styles.post}>
                <PostCard />
            </div>
            <div className={styles.post}>
                <PostCard />
            </div>
            <div className={styles.post}>
                <PostCard />
            </div>
        </div>
        </>
    )
}