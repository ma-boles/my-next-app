import styles from "./postCard.module.css";
import Link from "next/link";
import Image from "next/image";

export default function PostCard ({post}) {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imageContainer}>
                    <Image src={post.image} width={600} height={600} alt="image of project" className="flex items-center "/>
                </div>
                <span className={styles.date}>{post.date}</span>
            </div>
            <div className={styles.bottom}>
                <h1 className="text-lg font-bold">{post.title}</h1>
                <p className="text-sm text-slate-500">{post.body}</p>
                <Link href="/blog/post">READ MORE</Link>                
            </div>
        </div>
        
        </>
    )
}
