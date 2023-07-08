import { IBlog, ITopic } from "../models/interfaces";


const generateBlogId = () => {
    const blogs = getAllBlogs();
    const id = blogs?.length ? Number(blogs[blogs.length - 1].id.split('-')[1]) : 0;
    return 'blog-' + (id + 1);
}
export const createBlog = (topic: ITopic, description: string) => {
    const id = generateBlogId();
    const blog = {
        id,
        name: topic.name,
        description,
        keywords: topic.keywords,
        author: 'admin',
        date_created: new Date().toISOString(),
    }
    return blog as IBlog;
}
export const getAllBlogs = (sort = 'desc') => {
    const blogs = localStorage.getItem("blogs") || "[]";
    const blogsParsed = JSON.parse(blogs);
    if (sort === 'desc') {
        return [...blogsParsed].reverse();
    }
    return blogsParsed;
}
export const getBlogById = (id: string) => {
    const blogs = getAllBlogs();
    return blogs?.find((blog: IBlog) => blog.id === id) || {};
}

