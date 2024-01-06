
import styles from '@/app/page.module.css';
import { useState } from 'react';
import blogData from "@/data/blog.json";
import increment_post from './IncrementPost';

export default function BlogPage() {
    const [postId, setPostId] = useState(null);

    async function openPost(_postId) {
        try {
            increment_post(_postId);
            setPostId(_postId);
        } catch (error) {
            console.error("Error sending data:", error);
        }
    }


    return (<>
        {postId == null && Object.entries(blogData).map((postData) => {
            const id = postData[0];
            const post = postData[1];
            return (<div className={styles.blogPostThumb} key={id} onClick={() => { openPost(id); }}>
                <div style={{ float: "left" }}>
                    <div className={styles.blogPostTitle}>{post.title}</div>
                    <div className={styles.blogPostViews}>{post.views} views</div>
                </div>
                <div className={styles.blogPostTime}>~3min</div>
            </div>);
        })}
        {postId != null && <BlogPost />}
    </>);

    function BlogPost() {
        return (<>
            <div className={styles.title}>{blogData[postId].title}</div>
            <div className={styles.section}>{blogData[postId].content}</div>
        </>);
    }
}