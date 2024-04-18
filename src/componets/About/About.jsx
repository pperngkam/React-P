import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"



const aboutImg = "/src/assets/about/aboutImage.png"
const cursorIcon = "/src/assets/about/cursorIcon.png"
const serverIcon ="/src/assets/about/serverIcon.png"
const uiIcon = "/src/assets/about/uiIcon.png"
const myImageUrl = getImageUrl(aboutImg, cursorIcon, serverIcon, uiIcon);


export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
          <img src={getImageUrl(aboutImg)} alt="Me sitting wiht a laptop" 
          className={styles.aboutImage}/>

          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <img src={getImageUrl(cursorIcon)} alt="Cursor icon"  />
              <div className={styles.aboutItemsText}>
                <h3>Front end Developer</h3>
                <p>I'm a front end developer with experience in building responsive and optimized sites</p>
              </div>
            </li>
            
            <li className={styles.aboutItem}>
              <img src={getImageUrl(serverIcon)} alt="Server icon"  />
              <div className={styles.aboutItemsText}>
                <h3>Back end Developer</h3>
                <p>I have experience developing fast and optimized back-end systems and APIs</p>
              </div>
            </li>
            
            <li className={styles.aboutItem}>
              <img src={getImageUrl(uiIcon)} alt="Ui icon" />
              <div className={styles.aboutItemsText}>
                <h3>UX/UI Design</h3>
                <p>I have designed multiple landing pages and have created design systems as well</p>
              </div>
            </li>
            </ul>
        
        </div>
    </section>
  )
}

console.log('Full path to image:', myImageUrl);