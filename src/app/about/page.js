import styles from "../about/about.module.css";

export default function AboutPage () {
    return (
        <>
        <div className={styles.container }>
            <div className={styles.textContainer}>
                <h1 className="text-4xl font-bold text-slate-500">About Initiative</h1>
                <p className="font-5xl">Open source projects awaiting your valuable input. Open to all levels!</p>
                <div className={styles.box}>
                    <div>
                        <div className="text-slate-500">3</div>
                        <div>projects complete</div>
                    </div>
                    <div>
                        <div className="text-slate-500">7</div>
                        <div>projects in progress</div>
                    </div>
                </div>

            </div>
            <div className={styles.imageContainer}>
                Image 
            </div>
            </div>
            
        </>
    )
}