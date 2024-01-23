import { useState, useEffect } from 'react';
import styles from '@/app/blogAdmin.module.css';
import mainstyles from '@/app/page.module.css';
import { set_posts } from '@/components/BlogKV';

export default function BlogEditPost({ blogData, selectedPost, setPostId }) {
    const [title, setTitle] = useState(blogData[selectedPost]?.title ?? '');
    const [content, setContent] = useState(blogData[selectedPost]?.content ?? '');

    const submitPost = () => {
        let _newPost = {
            title,
            content,
            views: 0
        };
        let id = selectedPost === null ? Math.max(...Object.keys(blogData).map((e) => parseInt(e))) + 1 : selectedPost;
        if (!id || id === -Infinity) id = 0;
        let _blogData = { ...blogData, [id]: _newPost };
        set_posts(_blogData);
        window.location.reload(); // Refresh the page
    };

    const deletePost = () => {
        let _blogData = { ...blogData };
        delete _blogData[selectedPost];
        set_posts(_blogData);
        setPostId(null);
        window.location.reload(); // Refresh the page
    };

    return (
        <div style={{ padding: "5rem" }}>
            <input type="text" className={styles.titleInput} value={title} onChange={(e) => { setTitle(e.target.value); }} placeholder='Title' />
            <textarea className={styles.contentInput} value={content} onChange={(e) => { setContent(e.target.value); }} placeholder='Content' />
            <button className={styles.postButton} onClick={submitPost}>Post</button>
            <DeleteButton />
        </div>
    );

    function DeleteButton() {
        return (<div className={mainstyles.addButton} onClick={deletePost}>🗑️</div>);
    }
}