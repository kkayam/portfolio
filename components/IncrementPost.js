'use server';
const fs = require('fs');

export default async function increment_post(postId) {
    var blog_data = require('@/data/blog.json');
    blog_data[postId].views = blog_data[postId].views + 1;
    fs.writeFileSync('data/blog.json', JSON.stringify(blog_data), "UTF-8");
};