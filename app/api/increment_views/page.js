const fs = require('fs');

export default async function POST(req, res) {
    var blog_data = require('@/data/blog.json');
    var postId = req.body.postId;
    blog_data[postId].views = blog_data[postId].views + 1;
    fs.writeFileSync('data/blog.json', JSON.stringify(blog_data), "UTF-8");
};