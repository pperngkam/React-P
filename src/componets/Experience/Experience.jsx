
import React from 'react';
import skills from '../../data/skills.json';
import { getImageUrl } from '../../utils';
import history from '../../data/history.json';
import styles from "./Experience.module.css"

const skillsImgPaths = [
  "/src/assets/skills/html.png",
  "/src/assets/skills/css.png",
  "/src/assets/skills/react.png",
  "/src/assets/skills/node.png",
  "/src/assets/skills/graphql.png",
  "/src/assets/skills/mongodb.png",
  "/src/assets/skills/figma.png",
];

const imageSrc = [ 
    "/src/assets/history/google.png",
    "/src/assets/history/microsoft.png",
    "/src/assets/history/netflix.png",
];

export const Experience = () => {
  const skillImages = skillsImgPaths.map(path => getImageUrl(path));

  return (
    <section className={styles.container} id='experience'>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}><img src={skillImages[id]} alt={skill.name} /></div> 
              <p>{skill.title}</p>
            </div>
          ))}
        </div>

        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <div key={id} className={styles.historyItem}>
              <div><img src={imageSrc[id]} alt={`${historyItem.organisation} Logo`} /></div>

              <div  className={styles.historyItemDetials}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experiences.map((experience, id) => (
                    <li key={id}>{experience}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};
