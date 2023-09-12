import cookstoves from './assets/images/cookstoves.jpg'
import CreolLogo from './assets/images/LogoCropped.gif'
import Offsetra from './assets/images/offsetra.png'
import klima from './assets/images/klima-dao.png'

const logotext = "Euan";
const meta = {
    title: "Euan",
    description: "I’m 0xZuan blockchain engineer _ full stack developer",
};

const introdata = {
    title: "I’m Zuan",
    animated: {
        first: "Why bother if it's not fun",
        second: "I like Planet A.",
        third: "Smart contracts are cool",
    },
    description: "Align incentives, preserve nature, encourage shitposting",
    your_img_url: "https://images.unsplash.com/photo-1660214356059-0f0039f8c6eb",
};

const dataabout = {
    title: "a little about myself",
    aboutme: "Engineer turned fake internet money propagandist. Carbon credits are the worst tool for GHG mitigation/removal, apart from all the others we've tried - lets make them better",
};
const worktimeline = [{
        jobtitle: "Full Stack Engineer",
        where: "Creol",
        date: "2020",
    },
    {
        jobtitle: "Lead Engineer",
        where: "Creol",
        date: "2021-22",
    },
    {
        jobtitle: "Contributor",
        where: "KLIMA DAO",
        date: "2022",
    },
    {
        jobtitle: "Contributor",
        where: "Offsetra",
        date: "2022",
    },
    {
        jobtitle: "Lead Engineer",
        where: "Carbon.fyi",
        date: "2022-23",
    },
];

const skills = [{
        name: "JavaScript/TypeScript",
        value: 95,
    },
    {
        name: "React",
        value: 95,
    },
    {
        name: "Github/Github Actions",
        value: 85,
    },
    {
        name: "Solidity",
        value: 70,
    },
    {
        name: "LLMs",
        value: 60,
    },
    {
        name: "Subgraphs",
        value: 55,
    },
];

const services = [{
        title: "Smart Contracts",
        description: "Range of experience writing smart contracts for Ethereum and various Layer-2's. Particular experience in minting NFTs and fractionalising into ERC-20s.",
    },
    {
        title: "Front-end Engineering",
        description: "A variety of React-based projects under my belt, including work with KLIMA DAO and Offsetra (Carbon.fyi). Versed in NextJS.",
    },
    {
        title: "UI & UX Design",
        description: "Strong background in UX design through further education in 'Design Engineering' - The designer in me dreams and the dev in me suffers :)",
    },
];

const dataportfolio = [{
    img: cookstoves,
    description: "Ivy Dashboard",
    link: "/ivy",
},{
        img: cookstoves,
        description: "Cookstoves",
        link: "/cookstoves",
    },
    {
        img: CreolLogo,
        description: "Creol",
        link: "/creol",
    },
    {
        img: cookstoves,
        description: "Ivy Chatbot",
        link: "/chatbot",
    },
    {
        img: Offsetra,
        description: "carbon.fyi",
        link: "/carbon-fyi",
    },
    {
        img: klima,
        description: "KLIMA DAO",
        link: "/klima",
    },
];

const contactConfig = {
    YOUR_EMAIL: "zuan.0x@gmail.com",
    description: "Accepting unsolicited praise, shady business proposals and quality memes",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofiles = {
    github: "https://github.com/Zuan0x",
    twitter: "https://twitter.com/0xZuan",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofiles,
    logotext,
};
