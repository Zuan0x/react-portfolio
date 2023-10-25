import cookstoves from './assets/images/cookstoves.jpg'
import CreolLogo from './assets/images/LogoCropped.gif'
import Offsetra from './assets/images/offsetra.png'
import klima from './assets/images/klima-dao.png'
import bitgreen from './assets/images/bitgreen.jpeg'
import ivy1 from './assets/images/ivy1.webp'
import ivy2 from './assets/images/ivy2.jpeg'
import bitgreenDashboard from "./assets/images/bitgreen-dashboard.png"


const logotext = "Euan";
const meta = {
    title: "Euan",
    description: "I’m 0xZuan blockchain engineer _ full stack developer",
};

const introdata = {
    title: "I’m Euan",
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
        where: "Ivy Protocol",
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
        name: "Firebase/GCP",
        value: 90,
    },
    {
        name: "Github/Github Actions",
        value: 85,
    },
    {
        name: "PostgreSQL",
        value: 70,
    },
    {
        name: "Solidity",
        value: 70,
    },
    {
        name: "LLMs",
        value: 60,
    },
];

const services = [{
    title: "Full-stack Development",
    description: "Experienced taking ideas from concept to production, including design, development, testing, deployment and maintenance",
},
{
        title: "API Development",
        description: "Experience with REST and GraphQL APIs, including work with Apollo, Next.js, Redis, Firebase and more!",
    },
    {
        title: "UI & UX Design",
        description: "Strong background in UX design through further education in Design Engineering - The designer in me dreams and the dev in me suffers :)",
    },
];

const projects = [{
    src: ivy1,
    caption: "Ivy Dashboard",
    link: "/ivy",
    width: 320,
    height: 320,
},{
        src: cookstoves,
        caption: "Cookstoves",
        link: "/cookstoves",
        width: 400,
    height: 240,
    },
    {
        src: CreolLogo,
        caption: "Creol",
        link: "/creol",
        width: 320,
    height: 240,
    },
    {
        src: ivy2,
        caption: "Ivy Chatbot",
        link: "/chatbot",
        width: 320,
    height: 320,
    },
    {
        src: Offsetra,
        caption: "carbon.fyi",
        link: "/carbon-fyi",
        width: 240,
    height: 240,
    },
    {
        src: klima,
        caption: "KLIMA DAO",
        link: "/klima",
        width: 320,
    height: 320,
    },
    {
        src: bitgreen,
        caption: "Bitgreen Dashboard",
        link: "/bitgreen",
        width: 240,
    height: 240,
    },
];

const projectData = {
    bitgreen: {
        title: "Bitgreen",
        description: "I was hired by Offsetra to produce an overview dashboard of the energy usage and carbon emissions of the Polkadot blockchain network for Bitgreen. The final dashboard gave users a breakdown of the parachains, subnetworks and the network as a whole.",
        image: bitgreenDashboard
    }
}

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
    projects,
    projectData,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofiles,
    logotext,
};
