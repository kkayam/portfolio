import styles from './page.module.css';
import NavBar from '@/components/NavBar';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <NavBar />
        <div className={styles.title}>
          hey, im koray ✌️
        </div>

        <div className={styles.section} id='About'>About</div>
        <div className={styles.section} id='Blog'>Blog</div>
        <div className={styles.section} id='Resume'>Resume</div>
      </div>
    </main>
  );
}
