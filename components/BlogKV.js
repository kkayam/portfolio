'use server';
import { kv } from "@vercel/kv";

export async function increment_post(postId) {
    var blog_data = await kv.get("blog_data");
    blog_data[postId].views = blog_data[postId].views + 1;
    await kv.set("blog_data", blog_data);
};
export async function get_posts() {
    var blog_data = await kv.get("blog_data");
    return blog_data;
};
export async function set_posts(blog_data) {
    await kv.set("blog_data", blog_data);
};