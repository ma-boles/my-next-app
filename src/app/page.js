import styles from "../app/home.module.css"

export default function HomePage () {
  return(
    <>
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className="text-5xl font-semibold">
         Dev<br/>
         Design<br/>
         Innovations</h1>
        <p className="text-2xl">Web development studio offering beautifully crafted modern designs for your web solution needs.</p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        </div>
      {/*<div className={styles.imageContaniner}> 
      <p>HERO IMAGE</p></div>*/}
  </div>
    </>
  )
}