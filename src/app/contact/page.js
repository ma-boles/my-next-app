import styles from "../contact/contact.module.css";

export default function ContactPage () {
    return (
        <>
        <div className={styles.container }>
            <div className={styles.imageContainer}>Image</div>
            <div className={styles.formContainer}>
            <form className={styles.form}>
                <input type="text" placeholder="Name"></input>
                <input type="text" placeholder="Social Media or Email"></input>
                <input type="text" placeholder="Project of Interest"></input>
                <textarea type="text" cols="30" rows="7" placeholder="Other Questions/Concerns"></textarea>
                <button className={styles.button}>Send</button>
            </form>
                
            </div>
        </div>
        </>
    )
}