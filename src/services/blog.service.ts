import { storeState } from "../global/store";
import { IBlog, ITopic } from "../models/interfaces";

const generateBlogId = () => {
    const blogs = storeState.blogs;
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
    }
    return blog as IBlog;
}
export const getAllBlogs = () => {
    return storeState.blogs || [];
}
