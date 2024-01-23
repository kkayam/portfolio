'use client';
import styles from './page.module.css';
import NavBar from '@/components/NavBar';
import { useState, useEffect, createContext } from 'react';
import BlogPage from '@/components/BlogPage';
import HomePage from '@/components/HomePage';
import WorkPage from '@/components/WorkPage';
import { get_posts } from '@/components/BlogKV';
import sha256 from 'crypto-js/sha256';

export const AdminContext = createContext();

export default function Home() {
  const [page, setPage] = useState(0);
  const [reset, setReset] = useState(0);
  const [blogData, setBlogData] = useState({});
  const [admin, setAdmin] = useState(false); // Set initial admin state to false

  useEffect(() => {
    async function getBlogData() {
      setBlogData(await get_posts());
    }
    getBlogData();

    // Check if the URL parameter 'password' is equal to '123123'
    const urlParams = new URLSearchParams(window.location.search);
    const password = sha256(urlParams.get('password')).toString();
    if (password === '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e') {
      setAdmin(true); // Set admin state to true
    }
  }, []);

  function getPage(page) {
    switch (page) {
      case 0: return <HomePage key={reset} />;
      case 1: return <BlogPage key={reset} blogData={blogData} />;
      case 2: return <WorkPage key={reset} />;
    }
  }

  return (
    <AdminContext.Provider value={admin}>
      <main className={styles.main}>
        <div className={styles.container} id='Home'>
          <NavBar setPage={setPage} reset={() => { setReset(Date.now()); }} />
          {getPage(page)}
        </div>
        <footer className={styles.footer}></footer>
      </main>
    </AdminContext.Provider>
  );
}
