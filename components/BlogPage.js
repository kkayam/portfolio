'use client';
import styles from '@/app/page.module.css';
import { useState } from 'react';

var post_titles = ["Worms are cool, and heres why", "Japanese head massage", "Volcano eruption, and how this affects us", "Develop a game - NOW"];
var lorem_ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mauris orci, scelerisque nec velit id, facilisis gravida nibh. Vivamus vel ante tincidunt, laoreet ante vel, malesuada arcu. Sed tempus purus porttitor enim placerat, eu congue augue varius. Phasellus fermentum consectetur augue. Aliquam et sem nec augue eleifend iaculis. Fusce pharetra neque vitae metus tempor placerat. Maecenas accumsan fermentum nulla ut egestas. Morbi a scelerisque dui. Sed rutrum feugiat nulla eu mollis. Nullam vel facilisis tellus, et imperdiet libero. Proin et cursus leo. Aenean eleifend porttitor varius. Aliquam eleifend, mauris at iaculis vulputate, est lectus mollis lectus, vitae fringilla diam erat at dolor. In hac habitasse platea dictumst. Suspendisse hendrerit sodales risus eu ullamcorper. Aenean vehicula a orci non lacinia.";

export default function BlogPage() {
    const [postId, setPostId] = useState(null);
    return (<>
        {postId == null && post_titles.map((title, index) => {
            return (<div className={styles.blogPostThumb} onClick={() => { setPostId(index); }}>
                <div style={{ float: "left" }}>
                    <div className={styles.blogPostTitle}>{title}</div>
                    <div className={styles.blogPostViews}>123,333 views</div>
                </div>
                <div className={styles.blogPostTime}>~3min</div>
            </div>);
        })}
        {postId != null && <BlogPost />}
    </>);

    function BlogPost() {
        return (<>
            <div className={styles.title}>{post_titles[postId]}</div>
            <div className={styles.section}>{lorem_ipsum}</div>
        </>);
    }
}