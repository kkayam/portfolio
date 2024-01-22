'use client';
import styles from './page.module.css';
import NavBar from '@/components/NavBar';
import { useState, useEffect } from 'react';
import BlogPage from '@/components/BlogPage';
import HomePage from '@/components/HomePage';
import WorkPage from '@/components/WorkPage';
import { get_posts } from '@/components/BlogKV';

export default function Home() {
  const [page, setPage] = useState(0);
  const [reset, setReset] = useState(0);
  const [blogData, setBlogData] = useState({});

  useEffect(() => {
    async function getBlogData() {
      setBlogData(await get_posts());
    }
    getBlogData();
  }, []);

  function getPage(page) {
    switch (page) {
      case 0: return <HomePage key={reset} />;
      case 1: return <BlogPage key={reset} blogData={blogData} />;
      case 2: return <WorkPage key={reset} />;
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.container} id='Home'>
        <NavBar setPage={setPage} reset={() => { setReset(Date.now()); }} />
        {getPage(page)}
      </div>
      <footer className={styles.footer}></footer>
    </main>
  );
}
