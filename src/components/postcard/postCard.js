import styles from "./postCard.module.css";
import Link from "next/link";
import Image from "next/image";

export default function PostCard ({post}) {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imageContainer}>
                                   
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className="text-lg font-bold">{post.title}</h1>
                <p className="text-sm text-slate-500">{post.body}</p>
                <p>READ MORE</p>
                
            </div>
        </div>
        
        </>
    )
}
