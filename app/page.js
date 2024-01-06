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

        <div className={styles.section} id='Home'>Project 1</div>
        <div className={styles.section} id='Resume'>Project 2</div>
        <div className={styles.section} id='Portfolio'>Project 3</div>
      </div>
    </main>
  );
}
