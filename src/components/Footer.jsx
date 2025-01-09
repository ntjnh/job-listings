import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.attribution}>
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Built by <a href="https://nate-dev.com" target="_blank">Nate</a>.
            </div>
        </footer>
    )
}

export default Footer
