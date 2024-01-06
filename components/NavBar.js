'use client';
import styles from '@/app/page.module.css';

export default function NavBar() {
    const scrollToElement = (event) => {
        const button = event.target;
        const targetId = button.innerHTML.trim();
        const element = document.getElementById(targetId);

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (<div className={styles.navbar}>
        <div className={styles.navbarButton} onClick={scrollToElement}>About</div>
        <div className={styles.navbarButton} onClick={scrollToElement}>Blog</div>
        <div className={styles.navbarButton} onClick={scrollToElement}>Resume</div>
    </div>);
}