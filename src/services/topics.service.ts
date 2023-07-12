import { lists } from "../data/categories.data";
import { ECategories, ITopic, ITopicBasic, ICategory } from "../models/interfaces";
import { categories } from "../data/tabs.data";

const getTopics = () => {
    const topics = localStorage.getItem('topics');
    if (!topics) {
        localStorage.setItem('topics', JSON.stringify(lists));
    }
    return topics ? JSON.parse(topics) : lists;
}
export const getTopicsByType = (type: any = ECategories.ALL) => {
    const parsedTopics = getTopics();
    if (type === 'all') return combineTopics(parsedTopics);
    else {
        return parsedTopics[type] || [];
    }

};
const setTopics = (topics: ICategory[]) => {
    localStorage.setItem('topics', JSON.stringify(topics));
}
const combineTopics = (topics: ICategory[]) => {
    const combinedTopics = Object.keys(topics).reduce((acc: ITopic[], key: string) => {
        return [...acc, ...topics[key]]
    }, []);
    return combinedTopics;
}
export const deleteTopic = (id: string | null) => {
    if (!id) return;
    const type = id.split('-')[0];
    const topics = getTopics();
    const filteredTopics = topics[type].filter((topic: ITopic) => topic.id !== id);
    topics[type] = filteredTopics;
    setTopics(topics);
}
export const addTopic = (topic: ITopicBasic, type = ECategories.CUSTOM) => {
    const topics = getTopics();
    const id = generateId(type);
    if (!topics[type]) {
        topics[type] = [];
    }
    topics[type].push({ ...topic, id, category: type });
    setTopics(topics);
}

export const getAllCategories = () => {
    const categoriesData = localStorage.getItem('categories');
    if (!categoriesData) {
        localStorage.setItem('categories', JSON.stringify(categories));
    }
    return categoriesData ? JSON.parse(categoriesData) : categories;
}
export const addCategory = (categoryName: string) => {
    const categories = getAllCategories();
    const category = { name: titleCase(categoryName), value: categoryName.toLowerCase() };
    categories.push(category);
    localStorage.setItem('categories', JSON.stringify(categories));
}
export const editCategory = (categoryName: string, newCategoryName: string) => {
    const categories = getAllCategories();
    const category = categories.find((category: any) => category.value === categoryName);
    const newValue = newCategoryName.split(" ").join('_').toLowerCase();
    if (category) {
        category.name = titleCase(newCategoryName);
        category.value = newValue;
        localStorage.setItem('categories', JSON.stringify(categories));
        const topics = getTopics();
        topics[newValue] = topics[categoryName];
        delete topics[categoryName];
        setTopics(topics);
    }
}
export const deleteCategory = (categoryName: string) => {
    const categories = getAllCategories();
    const category = categories.find((category: any) => category.value === categoryName);
    if (category) {
        const topics = getTopics();
        delete topics[categoryName];
        setTopics(topics);
        const filteredCategories = categories.filter((category: any) => category.value !== categoryName);
        localStorage.setItem('categories', JSON.stringify(filteredCategories));
    }
}
export const generateId = (type: string) => {
    const topics = getTopicsByType(type);
    const id = topics.length ? Number(topics[topics.length - 1].id.split('-')[1]) : 0;
    return type + '-' + (id + 1);
}
export const titleCase = (str: string) => {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}