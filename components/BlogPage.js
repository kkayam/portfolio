'use client';
import styles from '@/app/page.module.css';

var post_titles = ["Worms are cool, and heres why", "Japanese head massage", "Volcano eruption, and how this affects us", "Develop a game - NOW"];

export default function BlogPage() {
    return (<>
        {post_titles.map((title) => {
            return (<div className={styles.blogPostThumb}>
                <div style={{ float: "left" }}>
                    <div className={styles.blogPostTitle}>{title}</div>
                    <div className={styles.blogPostViews}>123,333 views</div>
                </div>
                <div className={styles.blogPostTime}>~3min</div>
            </div>);
        })}
    </>);
}