'use client';
import styles from './page.module.css';
import NavBar from '@/components/NavBar';
import { useState } from 'react';
import BlogPage from '@/components/BlogPage';
import HomePage from '@/components/HomePage';
import WorkPage from '@/components/WorkPage';

export default function Home() {
  const [page, setPage] = useState(0);
  const [reset, setReset] = useState(0);

  function getPage(page) {
    switch (page) {
      case 0: return <HomePage key={reset} />;
      case 1: return <BlogPage key={reset} />;
      case 2: return <WorkPage key={reset} />;
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.container} id='Home'>
        <NavBar setPage={setPage} reset={() => { setReset(Date.now()); }} />
        {getPage(page)}
      </div>
    </main>
  );
}
