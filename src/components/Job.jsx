import React from 'react'
import styles from '../styles/Job.module.css'

const Job = ({ id, logo, company, position, postedAt, contract, location, role, level, languages, tools, isNew, isFeatured }) => {
    return (
        <article className={`${styles.job} ${isNew ? styles.new : ''} ${isFeatured ? styles.featured : ''}`}>
            <div className={styles.details}>
                <img className={styles.logo} src={logo} alt={company} />

                <div>
                    <h3 className={styles.company}>
                        {company}
                        {isNew && <span className={`${styles.badge} ${styles.badgeNew}`}>New!</span>}
                        {isFeatured && <span className={`${styles.badge} ${styles.badgeFeatured}`}>Featured</span>}
                    </h3>
                    <h2 className={styles.position}>{position}</h2>
                    <p className={styles.info}>
                        {postedAt}
                        <span className={styles.separator}>•</span>
                        {contract}
                        <span className={styles.separator}>•</span>
                        {location}
                    </p>
                </div>
            </div>

            <ul className={styles.tags}>
                <li>{role}</li>
                <li>{level}</li>
                {
                    languages.map(language => (
                        <li key={`language-${id}`}>{language}</li>
                    ))
                }
                {
                    tools.map(tool => (
                        <li key={`tool-${id}`}>{tool}</li>
                    ))
                }
            </ul>
        </article>
    )
}

export default Job
