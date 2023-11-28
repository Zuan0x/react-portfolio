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
import hyroxImage from "./assets/images/hyrox-1.png"
import hyroxLogo from "./assets/images/hyrox-logo.jpeg"
import conwayGif from "./assets/screenshots/conway/game-of-life.gif"
import conwayImage from "./assets/images/game-of-life.png"

const logotext = "Euan";
const meta = {
    title: "Euan",
    description: "I’m Euan _ full stack developer",
};

const introdata = {
    title: "I’m Euan",
    animated: {
        first: "Why bother if it's not fun",
        second: "I like Planet A.",
        third: "Smart contracts are cool",
    },
    description: "Align incentives, preserve nature, encourage innovation.",
    your_img_url: "https://images.unsplash.com/photo-1660214356059-0f0039f8c6eb",
};

const dataabout = {
    title: "a little about myself",
    aboutme: "Build cool stuff, have fun doing it. Hi I'm Euan, I am a seasoned Full Stack Developer with over 3 years of experience in the development industry. I have a strong track record of taking projects from whiteboard to production, while also leading my team to success. My expertise includes web development, database design and optimization, software architecture, and mobile development. With my strong background in software engineering, I am able to develop robust, secure, and user-friendly applications.",
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
    title: "Full Stack Development",
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
    // chips: [
    //     { value: "Nature", title: "Nature" },
    //     { value: "Flora", title: "Flora" },
    //   ],
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
    {
        src: hyroxLogo,
        caption: "HYROX Track",
        link: "/hyrox",
        width: 380,
    height: 240,
    },
    {
        src: conwayGif,
        caption: "Game of Life",
        link: "/conway",
        width: 380,
    height: 380,
    },
];

const projectData = {
    bitgreen: {
        title: "Bitgreen",
        description: "I was hired by Offsetra to produce an overview dashboard of the energy usage and carbon emissions of the Polkadot blockchain network for Bitgreen. The final dashboard gave users a breakdown of the parachains, subnetworks and the network as a whole.",
        image: bitgreenDashboard,
        icon: bitgreen,
        next: "ivy",
        technicalDetails: "The goal for this dashboard was to utilise the node data provided by the Bitgreen API to calculate and display energy usage and carbon emissions for the Polkadot network. The dashboard was built using React and allowed for blockchain wallet sign-in and authentication using the Polkadot.js library, with the data being stored in a PostgreSQL database. The necessary calculations for the network, subnetworks and indivudal parachains were performed using a Github Actions worklow executed every 24 hours with the results being written directly to the database",
        skillChips: ["JavaScript", "React", "Blockchain", "Polkadot.js", "Github Actions"],
    },
    'carbon-fyi': {
        title: "Carbon.fyi",
        description: "In partnership with Offsetra, I helped rework the emissions calculations for the highly popular carbon.fyi app, used to calculate the CO2 emissions for a given address or smart contract",
        image: carbonFYIimage,
        icon: Offsetra,
        next: "bitgreen",
        skillChips: ["TypeScript", "React", "Next.js", "Jest"],
    },
    'co-pilot': {
        title: "Ivy Co-Pilot",
        description: "Recently, Ivy have been developing a custom-built LLM to answer guide project developers and investors through the confusing world of carbon projects",
        image: chatGPT,
        icon: ivy2,
        link: "http://ai.ivyprotocol.com",
        next: "hyrox",
        technicalDetails: "The Ivy-Copilot utilised the latest Langchain features including memory, context retrieval and a custom-built LLM agent to answer guide project developers and investors through the confusing world of carbon projects. The LLM retrieval agent has access a dataset of 1000+ PDFs and reports through a vector database stored on Pinecone. The front-end was built using React and Firebase, with the backend being built using Express.js and the Langchain SDK",
        skillChips: ["TypeScript", "Express.js", "OpenAI", "Langchain", "React", "Firebase"],
    },
    cookstoves: {
        title: "Creol Cookstoves",
        description: "In partnership with two cookstove producers in Africa, Creol has been developing a methodology to use the data collected by the stoves for digital MRV, which in turn allowed for the creation of blockchain-native carbon credits. I was the engineering lead for this project, developing a front-end interface, smart contracts and verifiable proofs using Cartesi.",
        image: cookstoveImage,
        next: "klima",
        skillChips: ["Blockchain", "Solidity", "Cartesi", "React", "Express.js"],
    },
    creol: {
        title: "Creol",
        description: "Starting early 2020, Creol was one of the first developers of tokenised carbon and an underlying subscription service designed to give the public access to the Voluntary Carbon Market (VCM). Over the course of 2020-21 I worked at Creol developing smart contracts for tokenised carbon and an easy-to-use interface",
        image: creolGif,
        next: "cookstoves",
        skillChips: ["JavaScript", "Blockchain", "Solidity", "React"],
    },
    ivy: {
        title: "Ivy Dashboard",
        description: "Since late 2022 I've been working as Lead Engineer at Ivy Protocol, developing tools to reduce the roadblocks for early stage project developers. This culminated in the Ivy Dashboard - a one stop shop for project developers and stakeholders to message, share data, coordinate and much much more",
        image: ivySplash,
        icon: ivy1,
        technicalDetails: "The Ivy Dashboard contained a range of features, including messaging, notifications, data storage, authentication and more. This was achieved by building with React, with the backend being built using Next.js and Firebase. The authentication, sign-in and password recovery was achieved using Firebase Authentication and Cloud Functions. The messaging system made use of websockets, Firebase Cloud Functions, push notifications, Realtime database for conversation storage and Firebase storage for blob storage. The data storage layer was implemented using Cloud functions, realtime database and Firebase storage",
        skillChips: ["React", "TypeScript", "Firebase", "Next.js", "Websockets"],
        next: "co-pilot"
    },
    klima: {
        title: "KlimaDAO",
        description: "Integrating work we developed at Creol, we adapted an individual and business carbon footprint calculator for KlimaDAO, designed to help individuals engage and understand the impact of personal choices",
        image: klimaImage,
        icon: klima,
        skillChips: ["TypeScript", "React", "Next.js", "Jest"],
        next: "carbon-fyi"
    },
    hyrox: {
        title: "HYROX Track",
        description: "A personal project to track my training for the Hyrox fitness competition. The app allows users to track their training, compare their times to other users and view their progress over time. The app was built using HTMX, Express.js and PostgreSQL as an experiment into building with HTMX. My thesis is that businesses do one of two things - they either build a great user experience or they do some funky stuff on the backend and only need a serviceable interface. React and Next.js make a great option for the UX-focused company. I think HTMX fits the bill for the backend-focused company given its minimal JS, small build size and incredible performance.",
        image: hyroxImage,
        icon: hyroxLogo,
        skillChips: ["HTMX", "Express.js", "PostgreSQL"],
        next: "conway",
        githubLink: "https://github.com/Zuan0x/hyrox-track"
    },
    conway: {
        title: "Game of Life",
        description: "A quick and fun project to test out Pygame and the amazing patterns that emerge from simple rules. The Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.",
        image: conwayGif,
        icon: conwayGif,
        skillChips: ["Python", "Pygame"],
        next: "creol",
        githubLink: "https://github.com/Zuan0x/game-of-life-python"
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
