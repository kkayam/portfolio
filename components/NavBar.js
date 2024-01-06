'use client';
import styles from '@/app/page.module.css';

export default function NavBar(props) {
    return (<div className={styles.navbar}>
        <div className={styles.navbarButton} onClick={() => { props.setPage(0); props.reset(); }}>Home</div>
        <div className={styles.navbarButton} onClick={() => { props.setPage(1); props.reset(); }}>Blog</div>
        <div className={styles.navbarButton} onClick={() => { props.setPage(2); props.reset(); }}>Work</div>
    </div>);
}