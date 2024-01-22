"use client";
import { useState, useEffect } from 'react';
import styles from '@/app/blogAdmin.module.css';
import mainStyles from '@/app/page.module.css';
import { get_posts, set_posts } from '@/components/BlogKV';

export default function BlogAdmin() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [blogData, setBlogData] = useState({});
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        async function getBlogData() {
            setBlogData(await get_posts());
        }
        getBlogData();
    }, []);

    useEffect(() => {
        if (selectedPost !== null && blogData[selectedPost] !== undefined) {
            setTitle(blogData[selectedPost].title);
            setContent(blogData[selectedPost].content);
        }
    }, [selectedPost]);

    const newPost = () => {
        setSelectedPost(null);
        setTitle('');
        setContent('');
    };

    const handlePasswordChange = (event) => {
        if (event.target.value === '123123') {
            setIsLoggedIn(true);
        }
    };

    const submitPost = () => {
        let _newPost = {
            title,
            content,
            views: 0
        };
        let id = selectedPost === null ? Math.max(...Object.keys(blogData).map((e) => parseInt(e))) + 1 : selectedPost;
        if (!id || id === -Infinity) id = 0;
        let _blogData = { ...blogData, [id]: _newPost };
        setBlogData(_blogData);
        set_posts(_blogData);
        if (selectedPost === null) {
            newPost();
        }
    };

    const deletePost = (id) => {
        let _blogData = { ...blogData };
        delete _blogData[id];
        if (selectedPost === id) newPost();
        setBlogData(_blogData);
        set_posts(_blogData);
    };

    function PostsList(_blogData) {
        return Object.entries(_blogData).map((postData) => {
            const id = postData[0];
            const post = postData[1];
            return (<div className={mainStyles.blogPostThumb} key={id} onClick={() => { setSelectedPost(id); }}>
                <div style={{ float: "left" }}>
                    <div className={mainStyles.blogPostTitle}>{post.title}</div>
                    <div className={mainStyles.blogPostViews}>{post.views} views</div>
                    <button onClick={(e) => { deletePost(id); }}>Delete</button>
                </div>
            </div>);
        });
    }

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                {!isLoggedIn ? (
                    <div>
                        <input type="password" onChange={handlePasswordChange} />
                    </div>
                ) : (
                    <>
                        <div>
                            <button className={styles.postButton} onClick={newPost}>+ New Post +</button>
                            <input type="text" className={styles.titleInput} value={title} onChange={(e) => { setTitle(e.target.value); }} placeholder='Title' />
                            <textarea className={styles.contentInput} value={content} onChange={(e) => { setContent(e.target.value); }} placeholder='Content' />
                            <button className={styles.postButton} onClick={submitPost}>Post</button>
                        </div>
                        {PostsList(blogData)}
                    </>
                )}
            </div>
            <footer className={styles.footer}></footer>
        </main>
    );
}