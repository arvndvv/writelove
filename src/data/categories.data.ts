import { ECategories, ICategories, ITopic } from "../models/interfaces";


export const icpList: ITopic[] = [
    {
        name: "What should be included in an ideal customer profile?",
        keywords: [
            "ICP online presence",
            "ICP",
            "small business",
            "digital marketing",
            "branding",
        ],
        id: ECategories.ICP + '-' + 1,
        category: ECategories.ICP,
    },
    {
        name: "What are the 4 types of customer profile?",
        keywords: ["fast turnaround", "logo design", "website design", "branding"],
        id: ECategories.ICP + '-' + 2,
        category: ECategories.ICP,

    },
    {
        name: "What is ideal customer profile activity?",
        keywords: [
            "affordable branding",
            "startups",
            "entrepreneurs",
            "logo design",
            "website design",
        ],
        id: ECategories.ICP + '-' + 3,
        category: ECategories.ICP,

    },
    {
        name: "The Benefits of Comprehensive Branding Services for Small to Medium-Sized Businesses",
        keywords: [
            "branding services",
            "small business",
            "logo design",
            "website design",
            "social media management",
        ],
        id: ECategories.ICP + '-' + 4,
        category: ECategories.ICP,

    },

];
export const missionList: ITopic[] = [
    {

        name: "The Importance of Establishing a Strong Online Presence for Small Businesses",
        keywords: [
            "online presence",
            "small business",
            "digital marketing",
            "branding",
        ],
        id: ECategories.MISSION + '-' + 1,
        category: ECategories.MISSION,
    },
    {
        name: "How Fast Turnaround Times in Logo and Website Design Benifit Your Business",
        keywords: ["fast turnaround", "logo design", "website design", "branding"],
        id: ECategories.MISSION + '-' + 2,
        category: ECategories.MISSION,

    },
    {
        name: "Affordable Branding Solutions for Startups and Entrepreneurs",
        keywords: [
            "affordable branding",
            "startups",
            "entrepreneurs",
            "logo design",
            "website design",
        ],
        id: ECategories.MISSION + '-' + 3,
        category: ECategories.MISSION,

    },
    {
        name: "The Benefits of Comprehensive Branding Services for Small to Medium-Sized Businesses",
        keywords: [
            "comprehensive branding",
            "small business",
            "logo design",
            "website design",
            "social media management",
        ],
        id: ECategories.MISSION + '-' + 4,
        category: ECategories.MISSION,

    },
    {
        name: "Expert Tips for Choosing the Right Digital Marketing Agency for Your Business",
        keywords: [
            "digital marketing agency",
            "tips",
            "branding",
            "website design",
            "social media management",
        ],
        id: ECategories.MISSION + '-' + 5,
        category: ECategories.MISSION,

    },
];
export const productList: ITopic[] = [
    {
        name: "What are the best topics for blogs?",
        keywords: [
            "online presence",
            "small business",
            "digital marketing",
            "branding",
        ],
        id: ECategories.PRODUCT + '-' + 1,
        category: ECategories.PRODUCT,
    },
    {
        name: "How do you write a product blog?",
        keywords: ["fast turnaround", "logo design", "website design", "branding"],
        id: ECategories.PRODUCT + '-' + 2,
        category: ECategories.PRODUCT,

    },
    {
        name: "Affordable Branding Solutions for Startups and Entrepreneurs",
        keywords: [
            "affordable branding",
            "startups",
            "entrepreneurs",
            "logo design",
            "website design",
        ],
        id: ECategories.PRODUCT + '-' + 3,
        category: ECategories.PRODUCT,

    },
    {
        name: "The Benefits of Comprehensive Branding Services for Small to Medium-Sized Businesses",
        keywords: [
            "comprehensive branding",
            "small business",
            "logo design",
            "website design",
            "social media management",
        ],
        id: ECategories.PRODUCT + '-' + 4,
        category: ECategories.PRODUCT,

    },
    {
        name: "Expert Tips for Choosing the Right Digital Marketing Agency for Your Business",
        keywords: [
            "digital marketing agency",
            "tips",
            "branding",
            "website design",
            "social media management",
        ],
        id: ECategories.PRODUCT + '-' + 5,
        category: ECategories.PRODUCT,

    },
];
export const customList: ITopic[] = [
    {
        name: "What is Blockchain Technology?",
        keywords: [
            "Blockchain Technology",
            "small business",
            "digital marketing",
            "branding",
        ],
        id: ECategories.CUSTOM + '-' + 1,
        category: ECategories.CUSTOM,
    },
    {
        name: "How do I find topics for tech blogs?",
        keywords: ["fast turnaround", "logo design", "website design", "branding"],
        id: ECategories.CUSTOM + '-' + 2,
        category: ECategories.CUSTOM,

    },
    {
        name: "Affordable Branding Solutions for Startups and Entrepreneurs",
        keywords: [
            "affordable branding",
            "startups",
            "entrepreneurs",
            "logo design",
            "website design",

        ],
        id: ECategories.CUSTOM + '-' + 3,
        category: ECategories.CUSTOM,

    },

];

export const lists: ICategories = {
    [ECategories.ICP]: icpList,
    [ECategories.MISSION]: missionList,
    [ECategories.PRODUCT]: productList,
    [ECategories.CUSTOM]: customList,
    [ECategories.TEAM]: [],
    [ECategories.VISION]: [],
    [ECategories.aa]: [],
    [ECategories.bb]: [],
    [ECategories.cc]: [],
    [ECategories.dd]: [],
}