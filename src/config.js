export { default as pin } from './assets/icons/pin.svg';
export { default as faq } from './assets/images/faq.svg';
export { default as logo } from './assets/icons/logo.svg';
export { default as plus } from './assets/icons/plus.svg';
export { default as auth } from './assets/images/auth.svg';
export { default as lock } from './assets/images/lock.svg';
export { default as phone } from './assets/icons/phone.svg';
export { default as male } from './assets/icons/avatar/male.svg';
export { default as female } from './assets/icons/avatar/female.svg';
export { default as banner } from './assets/images/banner/image.svg';
export { default as rewardCup } from './assets/images/reward/cup.svg';
export { default as twitter } from './assets/icons/social/twitter.svg';
export { default as partnersImage } from './assets/images/partners.svg';
export { default as bannerText } from './assets/images/banner/text.svg';
export { default as facebook } from './assets/icons/social/facebook.svg';
export { default as linkedin } from './assets/icons/social/linkedin.svg';
export { default as rewardMedal } from './assets/images/reward/medal.svg';
export { default as instagram } from './assets/icons/social/instagram.svg';

import twitter from './assets/icons/social/twitter.svg';
import facebook from './assets/icons/social/facebook.svg';
import linkedin from './assets/icons/social/linkedin.svg';
import instagram from './assets/icons/social/instagram.svg';
import portfolio1 from './assets/images/portfolio/portfolio1.svg';
import portfolio2 from './assets/images/portfolio/portfolio2.svg';
import portfolio3 from './assets/images/portfolio/portfolio3.svg';

export const socialLinks = [
    {
        src: instagram,
        href: "https://instagram.com",
    },
    {
        src: twitter,
        href: "https://twitter.com",
    },
    {
        src: facebook,
        href: "https://facebook.com",
    },
    {
        src: linkedin,
        href: "https://linkedin.com",
    },
];

export const faqs = [
    {
        question: "Can I work on a project I started before the hackathon?",
        answer: "",
    },
    {
        question: "What happens if I need help during the hackathon?",
        answer: "",
    },
    {
        question: "What happens if I don't have an idea for a project?",
        answer: "",
    },
    {
        question: "Can I join a team or do I have to come with one?",
        answer: "",
    },
    {
        question: "What happens after the hackathon ends",
        answer: "",
    },
    {
        question: "Can I work on a project I started before the hackathon?",
        answer: "",
    },
];

export const portfolios = [
    {
        image: portfolio1,
        title: "Introduction to getlinked",
        subTitle: "tech Hackathon 1.0",
        description: `
        Our tech hackathon is a melting pot of visionaries, and its purpose is as
        clear as day: to shape the future. Whether you're a coding genius, a 
        design maverick, or a concept wizard, you'll have the chance to transform 
        your ideas into reality. Solving real-world problems, pushing the boundaries
        of technology, and creating solutions that can change the world,
        that's what we're all about!
        `,
    },
    {
        image: portfolio2,
        title: "Rules and",
        subTitle: "Guidelines",
        description: `
        Our tech hackathon is a melting pot of visionaries, and its purpose is as
        clear as day: to shape the future. Whether you're a coding genius, a 
        design maverick, or a concept wizard, you'll have the chance to transform 
        your ideas into reality. Solving real-world problems, pushing the boundaries
        of technology, and creating solutions that can change the world,
        that's what we're all about!
        `,
    },
    {
        image: portfolio3,
        title: "Judging Criteria",
        subTitle: "Key attributes",
        attributes: [
            {
                title: "Innovation and Creativity",
                content: `
                Evaluate the uniqueness and creativity of the solution. 
                Consider whether it addresses a real-world problem in a 
                novel way or introduces innovative features.
                `,
            },
            {
                title: "Functionality",
                content: `
                Assess how well the solution works. Does it perform its 
                intended functions effectively and without major issues? Judges would
                consider the completeness and robustness of the solution.
                `,
            },
            {
                title: "Impact and Relevance",
                content: `
                Determine the potential impact of the solution 
                in the real world. Does it address a significant problem, and is it relevant 
                to the target audience? Judges would assess the potential social, 
                economic, or environmental benefits.
                `,
            },
            {
                title: "Technical Complexity",
                content: `
                Evaluate the technical sophistication of the solution. 
                Judges would consider the complexity of the code, the use of advanced 
                technologies or algorithms, and the scalability of the solution.
                `,
            },
            {
                title: "Adherence to Hackathon Rules",
                content: `
                Judges will Ensure that the team adhered 
                to the rules and guidelines of the hackathon, including deadlines, use of 
                specific technologies or APIs, and any other competition-specific requirements.
                `,
            },
        ],
    },
];

export const timelines = [
    {
        left: {
            title: "Hackathon Announcement",
            description: `
            The getlinked tech hackathon 1.0 is formally announced
            to the general public and teams begin to get ready to register
            `,
        },
        right: {
            title: "November 18, 2023",
            description: ``,
        },
    },
    {
        left: {
            title: "November 18, 2023",
            description: ``,
        },
        right: {
            title: "Teams Registration begins",
            description: `
            Interested teams can now show their interest in the
            getlinked tech hackathon 1.0 2023 by proceeding to register
            `,
        },
    },
    {
        left: {
            title: "Teams Registration ends",
            description: `
            Interested Participants are no longer Allowed to
            register
            `,
        },
        right: {
            title: "November 18, 2023",
            description: ``,
        },
    },
    {
        left: {
            title: "November 18, 2023",
            description: ``,
        },
        right: {
            title: "Announcement of the accepted teams and ideas",
            description: `
            All teams whom idea has been accepted into getlinked tech
            hackathon 1.0 2023 are formally announced
            `,
        },
    },
    {
        left: {
            title: "Getlinked Hackathon 1.0 Offically Begins",
            description: `
            Accepted teams can now proceed to build their
            ground breaking skill driven solutions
            `,
        },
        right: {
            title: "November 18, 2023",
            description: ``,
        },
    },
    {
        left: {
            title: "November 18, 2023",
            description: ``,
        },
        right: {
            title: "Demo Day",
            description: `
            Teams get the opportunity to pitch their projects to judges.
            The winner of the hackathon will also be announced on
            this day
            `,
        },
    },
];