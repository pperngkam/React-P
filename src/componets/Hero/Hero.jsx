import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css";

const myImage = "/src/assets/hero/heroImage.png"
const myImageUrl = getImageUrl(myImage);


export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I,m Patcharin</h1>
            <p className={styles.description}>I'm UX/UI Design and Front end developer with no experice using Javascrip and React. Reach out if you'd like to learn more! </p>
            <a href='mailto:pperngkam@gmail.com'className={styles.contactBtn}>Contact Me</a>
        </div>

        <img className={styles.heroImg} src={getImageUrl(myImage)} alt='Hero image of me'/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>

        
    </section>
  )
}

console.log('Full path to image:', myImageUrl);
