
import styles from '@/app/page.module.css';
import { useState, useEffect, useContext } from 'react';
import { increment_post } from './BlogKV';
import { AdminContext } from '@/app/page';
import BlogEditPost from './BlogEditPost';


export default function BlogPage({ blogData }) {
    const admin = useContext(AdminContext);
    const [postId, setPostId] = useState(null);

    function handleAddPost() {
        let id = postId === null ? Math.max(...Object.keys(blogData).map((e) => parseInt(e))) + 1 : postId;
        if (!id || id === -Infinity) id = 0;
        setPostId(id);
    }

    async function openPost(_postId) {
        try {
            increment_post(_postId);
            setPostId(_postId);
        } catch (error) {
            console.error("Error sending data:", error);
        }
    }

    function calculateReadingTime(text) {
        const wordsPerMinute = 200;
        const numberOfWords = text.split(/\s/g).length;
        return Math.ceil(numberOfWords / wordsPerMinute);
    }

    return (<>
        {postId == null && Object.entries(blogData).map((postData) => {
            const id = postData[0];
            const post = postData[1];
            return <BlogPostThumb post={post} id={id} key={id} />;
        })}
        {!admin && postId != null && <BlogPost />}
        {admin && postId != null && <BlogEditPost blogData={blogData} selectedPost={postId} setPostId={setPostId} />}
        {admin && postId == null && <AddButton />}
    </>);

    function BlogPost() {
        return (<>
            <div className={styles.title}>{blogData[postId].title}</div>
            <div className={styles.section}>{blogData[postId].content}</div>
        </>);
    }

    function BlogPostThumb({ post, id }) {
        return (<div className={styles.blogPostThumb} key={id} onClick={() => { openPost(id); }}>
            <div style={{ float: "left" }}>
                <div className={styles.blogPostTitle}>{post.title}</div>
                <div className={styles.blogPostViews}>{post.views} views</div>
            </div>
            <div className={styles.blogPostTime}>~{calculateReadingTime(post.content)} min</div>
        </div>);
    }

    function AddButton() {
        return (<div className={styles.addButton} onClick={handleAddPost}>+</div>);
    }
}