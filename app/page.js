import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <NavBar />
        <div className={styles.title}>
          hey, im koray
        </div>

        <div className={styles.section}>Project 1</div>
        <div className={styles.section}>Project 2</div>
        <div className={styles.section}>Project 3</div>
      </div>
    </main>
  );
}


function NavBar() {
  return (<div className={styles.navbar}>
    <div className={styles.navbarButton}>Home</div>
    <div className={styles.navbarButton}>Resume</div>
    <div className={styles.navbarButton}>Portfolio</div>
  </div>);
}