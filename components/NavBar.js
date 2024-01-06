'use client';
import styles from '@/app/page.module.css';

export default function NavBar(props) {
    return (<div className={styles.navbar}>
        <div className={styles.navbarButton} onClick={() => { props.setPage(0); }}>About</div>
        <div className={styles.navbarButton} onClick={() => { props.setPage(1); }}>Blog</div>
        <div className={styles.navbarButton} onClick={() => { props.setPage(2); }}>Resume</div>
    </div>);
}