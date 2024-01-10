import styles from "../about/about.module.css";

export default function AboutPage () {
    return (
        <>
        <div className={styles.container }>
            <div className={styles.textContainer}>
                <h1 className="text-4xl font-bold text-slate-500">About</h1>
                <p className="font-5xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
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