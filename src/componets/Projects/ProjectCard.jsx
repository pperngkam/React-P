// import React from "react";

// import styles from "./ProjectCard.module.css";
// import { getImageUrl } from "../../utils";


// const projectImg = "/src/assets/projects/project.png"
// const myProject = getImageUrl(projectImg);

// export const ProjectCard = ({
//   project: { title, imageSrc, description, skills, demo, source },
// }) => {
//   return (
//     <div className={styles.container}>
//       <img
//         src={getImageUrl(imageSrc)}
//         alt={`Image of ${title}`}
//         className={styles.image}
//       />
//       <h3 className={styles.title}>{title}</h3>
//       <p className={styles.description}>{description}</p>
//       <ul className={styles.skills}>
//         {skills.map((skill, id) => {
//           return (
//             <li key={id} className={styles.skill}>
//               {skill}
//             </li>
//           );
//         })}
//       </ul>
//       <div className={styles.links}>
//         <a href={demo} className={styles.link}>
//           Demo
//         </a>
//         <a href={source} className={styles.link}>
//           Source
//         </a>
//       </div>
//     </div>
//   );
// };
// console.log('Full path to image:', projectImg);

import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  // const fullImagePath = getImageUrl(imageSrc);

  // console.log('Full path to image:', fullImagePath);

  
  const ImagePath = "/src/assets/projects/project.png"

  console.log('Full path to image:', ImagePath)

  return (
    <div className={styles.container}>
      <img
        src={ImagePath}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          Demo
        </a>
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};
