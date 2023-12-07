import { v4 as uuidv4 } from 'uuid';

const projectData = [
    {
        title: "EYE Research Group",
        description: "Designed and implemented webpages and databases with practical application for obtaining consent forms used in eye management by Near Vision Institute. This tool streamlined the consent form process with improved data processing. In conjunction, I designed and executed a web-based patient intake form completed by patients prior to initial visits with the provider.",
        tools: ["PHP", "HTML", "MySQL", "Bootstrap", "AWS EC2", "AWS RDS"],
        links: {},
        imgSrc: "/newGif.gif",
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
        title: "Fat Napz Society Inventory",
        description: "Created an appplication to create, update, delete, and view inventory for Fat Napz Society.",
        tools: ["Express", "JavaScript", "Bootstrap, MongoDB Atlas, Node.JS"],
        links: {link:"https://fatnapz-society-inventory.onrender.com/catalog", github: "https://github.com/EuanProjects/fatnapz-inventory"},
        imgSrc: "/fatnapzinventory.png",
        id: uuidv4(),
    },
    { 
        title: "Bowling App",
        description: "Programmed a full-stack bowling application with a REST API that tracks the score of 3 game sets for league and the type of pins knocked down per frame.",
        tools: ["React", "Bootstrap", "JavaScript", "Express", "AWS DynamoDB"],
        links: {github : "https://github.com/ejcanoy/my-bowling-app-front-end"},
        imgSrc: "/bowlingpins2.png",
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
        title: "Portfolio V1",
        description: "My first portfolio website to showcase my current work and and a way for professionals to contact me. Practiced creating a responsive design and adding features to allow for a more interactive experience and develop my react skills.",
        tools: ["React", "Boostrap", "JavaScript", "react-router-dom", "email-JS"],
        links: {link : "https://euan-canoy-portfolio.onrender.com/", github : "https://github.com/ejcanoy/website"},
        imgSrc: "/portfoliov1.png",
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
    {
        title: "Student Record System for Xavier's School for the Gifted",
        description: "Produced a web app with a group of students that presents, creates, and updates student records. Created the database and the features to update transcript records. Made with Python, Flask, PostgreSQL, and Psycopg2.",
        tools: ["Python", "Flask", "PostgreSQL", "Psycopg2"],
        link: {},
        imgSrc: "xmen_logo.png",
        id: uuidv4(),
    },
]

export default projectData