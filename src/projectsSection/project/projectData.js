import { v4 as uuidv4 } from 'uuid';

const projectData = [
    {
        title: "The Home Depot Internship",
        description: "Built a microservice backend that automates product prioritization for promotional events, enabling dynamic placement of key products during sales on homedepot.com. This replaced a manual 2-week process with a 24-hour automated solution, significantly improving efficiency and boosting promotional revenue. Developed a RESTful API using Java, Micronaut, PostgreSQL, and Google Cloud Services.",
        tools: ["Java", "Micronaut", "PostgreSQL", "Google Cloud Services"],
        links: {},
        imgSrc: "/homedepot.png",
        id: uuidv4(),
    },
    {
        title: "YL Drip Website",
        description: "Launched and deployed YL Drip’s first business website to showcase their apparel services, resulting in the acquisition of two clients within the first month by implementing user-centric layouts, responsive design, and SEO optimization techniques to establish a strong online presence through React, TailwindCSS, and JavaScript. Implemented a quote and contact system using Railway, Express, Node.js, Cloudinary, and JavaScript to enhance customer engagement and streamline communication.",
        tools: ["React", "react-router-dom", "tailwind", "Node.js", "Cloudinary", "Railway"],
        links: {link:"https://www.yldrip.com/"},
        imgSrc: "/yldrip.png",
        id: uuidv4(),
    },
    {
        title: "Family Handy Services Website",
        description: "Designed and launched the Family Handyman & Home Repair Services' first website, establishing a professional online presence and enabling customer access to past projects and testimonials. Utilized Figma for high-fidelity prototypes and React, TailwindCSS for mock design, improving client satisfaction.",
        tools: ["React", "react-router-dom", "tailwind"],
        links: {link:"https://www.thefamilyhandymanservices.com/"},
        imgSrc: "/familyhandyman.png",
        id: uuidv4(),
    },
    {
        title: "EYE Research Group",
        description: "Designed and implemented webpages and databases with practical application for obtaining consent forms used in eye management by Near Vision Institute. This tool streamlined the consent form process with improved data processing. In conjunction, I designed and executed a web-based patient intake form completed by patients prior to initial visits with the provider.",
        tools: ["PHP", "HTML", "MySQL", "Bootstrap", "AWS EC2", "AWS RDS"],
        links: {},
        imgSrc: "/newGif.gif",
        id: uuidv4(),
    },
    {
        title: "Messenger App",
        description: "Developed an application to chat with other people. Gives users the option to create an account, sign in, add friends, and create personal or group chats! Also gives users the ability to customize their profile and chat theme settings.",
        tools: ["Express", "JavaScript", "React", "Tailwind", "MongoDB", "Node.JS", "Railway", "Render"],
        links: {link:"https://messenger-6gej.onrender.com/", github: "https://github.com/EuanProjects/messenger"},
        imgSrc: "/messenger.png",
        id: uuidv4(),
    },
    {
        title: "Fat Napz Society Redesign",
        description: "Redesigned and developed a revamped version of https://www.fatnapzsociety.com/ . Mock design that allows for users to still add items to cart, checkout, and subscribe to site",
        tools: ["React", "react-router-dom", "tailwind"],
        links: {link:"https://fatnapzsociety.onrender.com/", github: "https://github.com/ejcanoy/shopping-cart"},
        imgSrc: "/fatnapz.png",
        id: uuidv4(),
    },
    {
        title: "Reminders App Clone",
        description: "This application serves as a clone of Apple Reminders, providing users with the ability to create, manage, and delete todos and lists.",
        tools: ["HTML", "CSS", "JavaScript"],
        links: {link : "https://ejcanoy.github.io/todo/", github : "https://github.com/ejcanoy/todo"},
        imgSrc: "/reminderscreenshot.png",
        id: uuidv4(),
    },
    {
        title: "Crypto Tracker",
        description: "Developed a web app in collaboration with a team of UW students that allows users to track cryptocurrencies, receive email updates on top cryptos, and save cryptos that they want to monitor to an account that they created. Created the API and email subscription features.",
        tools: ["Python", "Flask", "AWS Elastic Beanstalk", "S3", "DynamoDB", "Code Pipeline", "SNS", "Lambda"],
        link: {},
        imgSrc: "cryptotracker.png",
        id: uuidv4(),
    },
]

export default projectData