import { IBlog, ITopic, IUser } from "../models/interfaces";

export const getAllBlogs = (sort = 'desc') => {
    const blogs = localStorage.getItem("blogs") || "[]";
    const blogsParsed = JSON.parse(blogs);
    if (sort === 'desc') {
        return [...blogsParsed].reverse();
    }
    return blogsParsed;
}
export const addNewBlog = (blog: IBlog) => {
    const blogs = getAllBlogs();
    blogs.push(blog);
    localStorage.setItem("blogs", JSON.stringify(blogs));
    return blogs;
}
export const getBlogById = (id: string) => {
    const blogs = getAllBlogs();
    return blogs?.find((blog: IBlog) => blog.id === id) || {};
}
export const createNewBlog = (topic: ITopic, description: string, currentUser: IUser) => {
    const id = generateBlogId();
    const blog = {
        id,
        name: topic.name,
        description,
        keywords: topic.keywords,
        author_id: currentUser.id,
        date_created: new Date().toISOString(),
    }
    return blog as IBlog;
}
export const setBlogs = (blogs: IBlog[]) => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
}
const generateBlogId = () => {
    const blogs = getAllBlogs();
    const id = blogs.length ? Number(blogs[blogs.length - 1]['id'].split('-')[1]) : 0;
    return 'blog-' + (id + 1);
}


