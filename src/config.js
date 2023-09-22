export { default as logo } from './assets/icons/logo.svg';
export { default as banner } from './assets/images/banner/image.svg';
export { default as bannerText } from './assets/images/banner/text.svg';

import portfolio1 from './assets/images/portfolio/portfolio1.svg';
import portfolio2 from './assets/images/portfolio/portfolio2.svg';
import portfolio3 from './assets/images/portfolio/portfolio3.svg';

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