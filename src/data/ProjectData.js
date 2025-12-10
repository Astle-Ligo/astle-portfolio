// src/data/projectsData.js

// Tejas 
import tejas0 from "../assets/Images/Tejas/0.png";
import tejas1 from "../assets/Images/Tejas/1.png";
import tejas2 from "../assets/Images/Tejas/2.png";
import tejas3 from "../assets/Images/Tejas/3.png";
import tejas4 from "../assets/Images/Tejas/4.png";
import tejas5 from "../assets/Images/Tejas/5.png";
import tejas6 from "../assets/Images/Tejas/6.png";
import tejas7 from "../assets/Images/Tejas/7.png";
import tejas8 from "../assets/Images/Tejas/8.png";

// Collabrative Coding Platform
import ccp0 from "../assets/Images/ccp/0.png";
import ccp1 from "../assets/Images/ccp/1.png";
import ccp2 from "../assets/Images/ccp/2.png";

// Danil Vilov
import dv0 from "../assets/Images/dv/0.png";
import dv1 from "../assets/Images/dv/1.png";
import dv2 from "../assets/Images/dv/2.png";
import dv3 from "../assets/Images/dv/3.png";
import dv4 from "../assets/Images/dv/4.png";

// Treasure Hunt Web Devlopment
import thwd0 from "../assets/Images/thwd/0.png";
import thwd1 from "../assets/Images/thwd/1.png";
import thwd2 from "../assets/Images/thwd/2.png";
import thwd3 from "../assets/Images/thwd/3.png";
import thwd4 from "../assets/Images/thwd/4.png";
import thwd5 from "../assets/Images/thwd/5.png";
import thwd6 from "../assets/Images/thwd/6.png";

// Football Tournament
import football0 from "../assets/Images/football/0.png";
import football1 from "../assets/Images/football/1.png";
import football2 from "../assets/Images/football/2.png";
import football3 from "../assets/Images/football/3.png";
import football4 from "../assets/Images/football/4.png";
import football5 from "../assets/Images/football/5.png";
import football6 from "../assets/Images/football/6.png";

// Portfolio Website
import portfolio0 from "../assets/Images/portfolio/0.png";
import portfolio1 from "../assets/Images/portfolio/1.png";
import portfolio2 from "../assets/Images/portfolio/2.png";
import portfolio3 from "../assets/Images/portfolio/3.png";
import portfolio4 from "../assets/Images/portfolio/4.png";
import portfolio5 from "../assets/Images/portfolio/5.png";
import portfolio6 from "../assets/Images/portfolio/6.png";

// Tech Quest
import tq0 from "../assets/Images/tq/0.png";
import tq1 from "../assets/Images/tq/1.png";
import tq2 from "../assets/Images/tq/2.png";
import tq3 from "../assets/Images/tq/3.png";
import tq4 from "../assets/Images/tq/4.png";

// Treasure Hunt
import TT0 from "../assets/Images/TT/0.png";
import TT1 from "../assets/Images/TT/1.png";
import TT2 from "../assets/Images/TT/2.png";
import TT3 from "../assets/Images/TT/3.png";
import TT4 from "../assets/Images/TT/4.png";

// Export the projects array
export const PROJECTS = [
    {
        id: 0,
        title: "Tejas Website",
        description:
            "An event-management platform for the Shift III intra-college fest, featuring event listings, schedules, and role-based logins. The site handled 700+ registrations and was used by 20+ cultural reps and 30+ event heads",
        time: "March 2025",
        gitLink: "https://github.com/Astle-Ligo/tejas-website",
        role: "Full-stack Developer",
        cilent: "Shift III association , St.Joseph's University",
        techStack: ["Node.js", "Express", "MongoDB"],
        images: [tejas0, tejas1, tejas2, tejas3, tejas4, tejas5, tejas6, tejas7, tejas8,],
    },
    {
        id: 1,
        title: "Collaborative Coding Platform",
        description:
            "A real-time collaborative coding web app supporting 50+ programming languages, allowing multiple users to work together on the same project through a shareable link.",
        time: "March 2025",
        gitLink: "https://github.com/Astle-Ligo/collabrative-coding-platform",
        cilent: "Personal",
        role: "Full-stack Developer",
        techStack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Judge0", "Websocket", "AWS EC2"],
        images: [ccp0, ccp1, ccp2,],
    },
    {
        id: 2,
        title: "Danil Vilov",
        description:
            "An e-commerce web app built for a Kerala-based fashion startup, enabling product browsing, customer accounts, and streamlined online ordering for the Danil Vilov clothing brand.",
        time: "August 2023",
        gitLink: "https://github.com/Astle-Ligo/Danil_Vilov",
        cilent: "Danil Vilov, Kerala",
        role: "Full-stack Developer",
        techStack: ["Node.js", "Express", "MongoDB",],
        images: [dv0, dv1, dv2, dv3, dv4,],
    },
    {
        id: 3,
        title: "Treasure Hunt Builder",
        description:
            "A secure, upgraded treasure-hunt platform built for inter-college fests, enabling 50+ teams to participate in a hybrid online–offline game with automated clue progression and event management.",
        time: "Febuary 2025",
        gitLink: "https://github.com/Astle-Ligo/visages-treasure-hunt",
        cilent: "College Event",
        role: "Full-stack Developer",
        techStack: ["Node.js", "Express", "MongoDB",],
        images: [thwd0, thwd1, thwd2, thwd3, thwd4, thwd5, thwd6,],
    },
    {
        id: 4,
        title: "Football Tournament Manager",
        description:
            "A web app to create, organize, and manage football tournaments with team registration, match scheduling, and score tracking.",
        time: "April 2025",
        gitLink: "https://github.com/Astle-Ligo/kali",
        cilent: "Personal",
        role: "Full-stack Developer",
        techStack: ["React", "Node.js", "Express", "MongoDB",],
        images: [football0, football1, football2, football3, football4, football5, football6,],
    },
    {
        id: 5,
        title: "Portfolio Website",
        description:
            "A personal portfolio website built to showcase my projects, skills, and experience with smooth animations and a clean UI.",
        time: "August 2024",
        gitLink: "https://github.com/Astle-Ligo/portfolio-website",
        cilent: "Personal",
        role: "Web Desigining",
        techStack: ["HTML", "CSS", "JS", "GSAP"],
        images: [portfolio0, portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6,],
    },
    {
        id: 6,
        title: "Tech Quest Website",
        description:
            "An information website built for a hackathon hosted by our team under the Computer Science Department, displaying event details, schedules, and announcements.",
        time: "March 2024",
        gitLink: "https://github.com/Astle-Ligo/tech-quest",
        cilent: "Computer Science Department , St. Joseph's Universtiy",
        role: "Web Designer",
        techStack: ["HTML", "CSS", "JS",],
        images: [tq0, tq1, tq2, tq3, tq4,],
    },
    {
        id: 7,
        title: "Simple Treasure Hunt Game",
        description:
            "A lightweight hybrid (online + offline) treasure hunt game built for an intra-college fest, played by 15+ teams across campus.",
        time: "March 2023",
        gitLink: "https://github.com/Astle-Ligo/Treasure-Hunt",
        cilent: "College Event",
        role: "Web Designer",
        techStack: ["HTML", "CSS", "JS",],
        images: [TT0, TT1, TT2, TT3, TT4,],
    },
];
