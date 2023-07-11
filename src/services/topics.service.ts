import { lists } from "../data/categories.data";
import { ICategories, ECategories, ITopic, ITopicBasic } from "../models/interfaces";
import { categories } from "../data/tabs.data";

const getTopics = () => {
    const topics = localStorage.getItem('topics');
    return topics ? JSON.parse(topics) : lists;
}
export const getTopicsByType = (type = ECategories.ALL) => {
    const parsedTopics = getTopics();
    switch (type) {
        case ECategories.CUSTOM:
            return parsedTopics.custom;
        case ECategories.ICP:
            return parsedTopics.icp;
        case ECategories.MISSION:
            return parsedTopics.mission;
        case ECategories.PRODUCT:
            return parsedTopics.product;
        default:
            return combineTopics(parsedTopics);
    }

};
const setTopics = (topics: ICategories) => {
    localStorage.setItem('topics', JSON.stringify(topics));
}
const combineTopics = (topics: ICategories) => {
    const combinedTopics = [...topics.custom, ...topics.icp, ...topics.mission, ...topics.product];
    return combinedTopics;
}
export const deleteTopic = (id: string | null) => {
    if (!id) return;
    const type = id.split('-')[0] as ECategories;
    const topics = getTopics();
    const filteredTopics = topics[type].filter((topic: ITopic) => topic.id !== id);
    topics[type] = filteredTopics;
    setTopics(topics);
}
export const addTopic = (topic: ITopicBasic, type: ECategories = ECategories.CUSTOM) => {
    const topics = getTopics();
    const id = generateId(type);
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
export const generateId = (type: ECategories) => {
    const topics = getTopicsByType(type);
    const id = Number(topics[topics.length - 1].id.split('-')[1]);
    return type + '-' + (id + 1);
}