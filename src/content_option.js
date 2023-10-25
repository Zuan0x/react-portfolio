import cookstoves from './assets/images/cookstoves.jpg'
import CreolLogo from './assets/images/LogoCropped.gif'
import Offsetra from './assets/images/offsetra.png'
import klima from './assets/images/klima-dao.png'
import bitgreen from './assets/images/bitgreen.jpeg'
import ivy1 from './assets/images/ivy1.webp'
import ivy2 from './assets/images/ivy2.jpeg'
import bitgreenDashboard from "./assets/images/bitgreen-dashboard.png"
import carbonFYIimage from "./assets/images/carbonFyi.jpeg"
import chatGPT from "./assets/images/chatGPT.jpeg"
import cookstoveImage from "./assets/images/cookstoves.jpg"
import creolGif from "./assets/images/LogoCropped.gif"
import ivySplash from "./assets/images/ivySplash.png"
import klimaImage from "./assets/images/klima-dao.png"


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
        caption: "Ivy Co-Pilot",
        link: "/co-pilot",
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
    },
    carbonFYI: {
        title: "Carbon.fyi",
        description: "In partnership with Offsetra, I've recently been helping rework the emissions calculations for the highly popular carbon.fyi app, used to calculate the CO2 emissions for a given address or smart contract",
        image: carbonFYIimage
    },
    copilot: {
        title: "Ivy Co-Pilot",
        description: "Recently, Ivy have been developing a custom-built LLM to answer guide project developers and investors through the confusing world of carbon projects",
        image: chatGPT
    },
    cookstoves: {
        title: "Creol Cookstoves",
        description: "In partnership with two cookstove producers in Africa, Creol has been developing a methodology to use the data collected by the stoves for digital MRV, which in turn allowed for the creation of blockchain-native carbon credits. I was the engineering lead for this project, developing a front-end interface, smart contracts and verifiable proofs using Cartesi.",
        image: cookstoveImage
    },
    creol: {
        title: "Creol",
        description: "Starting early 2020, Creol was one of the first developers of tokenised carbon and an underlying subscription service designed to give the public access to the Voluntary Carbon Market (VCM). Over the course of 2020-21 I worked at Creol developing smart contracts for tokenised carbon and an easy-to-use interface",
        image: creolGif
    },
    ivy: {
        title: "Ivy Dashboard",
        description: "Since late 2022 I've been working as Lead Engineer at Ivy Protocol, developing tools to reduce the roadblocks for early stage project developers. This culminated in the Ivy Dashboard - a one stop shop for project developers and stakeholders to message, share data, coordinate and much much more",
        image: ivySplash
    },
    klima: {
        title: "KlimaDAO",
        description: "Integrating work we developed at Creol, we adapted an individual and business carbon footprint calculator for KlimaDAO, designed to help individuals engage and understand the impact of personal choices",
        image: klimaImage
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
