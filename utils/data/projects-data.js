import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    // {
    //     id: 1,
    //     name: 'AI Powered Financial App',
    //     description: "Me and my team built an AI-powered financial mobile application. I have developed API using Express, Typescript, OpenAI, AWS, and MongoDB. Used OTP via AWS SES, Google, and Facebook for the authentication system. Built AI assistants using OpenAI's latest model and trained using our dataset. Voice messages are converted to text using AWS Transcribe. The app fetches data from Google Sheets and generates a PDF term sheet, sent via AWS SES.",
    //     tools: ['Express', 'MongoDB', 'OpenAI API', 'AWS SES', 'AWS S3', 'Node Mailer', 'Joi', 'Puppeteer', 'EC2', 'PM2', 'Nginx'],
    //     role: 'Backend Developer',
    //     code: '',
    //     demo: '',
    //     image: crefin,
    // },
    {
        id: 1,
        name: 'Stocks Purchase Manager',
        description: '∗ Engineered a Java application with a 3-tiered MVC Architecture, integrating various design patterns like Builder Pattern,\n'
                     + 'Visitor Pattern, etc. to simulate the functioning of a Portfolio Manager.\n'
                     + '∗ Leveraged financial APIs and various data analysis tools such as Yahoo Finance, Alpha Vantage, and Bloomberg to collect',
        tools: [ 'Java, Java Swing, XML, JSON, Design Patterns'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 2,
        name: 'Social Media Website',
        description: '∗ Implemented a full-stack web application like Twitter, which facilitates user authentication, following/unfollowing of other\n'
                     + 'users, tweeting, and browsing tweets from up to 100 concurrent users.\n'
                     + '∗ Devised and optimized an algorithm that utilizes user interactions with tweets to curate a personalized tweet feed,\n'
                     + 'prioritizing tweets with a poll rating of over 80%.',
        tools: ['React', 'HTML','CSS','Express','JavaScript','AJAX','MongoDB','JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 3,
        name: 'Newsroom Management',
        description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },