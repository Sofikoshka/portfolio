import project01 from "./../img/projects/01.svg"
import project01Big from "./../img/projects/01-big.svg"

import project02 from "./../img/projects/02.svg"
import project02Big from "./../img/projects/02-big.svg"

import project03 from "./../img/projects/03.jpeg"
import project03Big from "./../img/projects/03-big.jpeg"

import project04 from "./../img/projects/04.jpeg"
import project04Big from "./../img/projects/04-big.jpeg"

const projects = [
    {
        title:"To Do App",
        skills:"ReactJS, JavaScript, SCSS, HTML, axios",
        img: project01,
        imgBig: project01Big,
        
        gitHubLink: 'https://github.com/Sofikoshka/todoReact'
    },

    {
        title:"Notes app",
        skills:"React, JavaScript, HTML, CSS, BootStrap",
        img: project02,
        imgBig: project02Big,
        link: 'https://sofikoshka.github.io/todo/',
        gitHubLink: 'https://github.com/Sofikoshka/todo'
    },
    {
        title:"Landing",
        skills:"HTML&CSS, JavaScript",
        img: project03,
        imgBig: project03Big,
        link: 'https://sofikoshka.github.io/template1/',
        gitHubLink: 'https://github.com/Sofikoshka/template1'
    },
    {
        title:"Wordle game (in progress)",
        skills:"ReactJS, JavaScript, CSS, WebSocket, Figma",
        img: project04,
        imgBig: project04Big,
        link: 'https://wordle-ua.onrender.com/',
        gitHubLink: 'https://github.com/WordleUA/wordle'
    }
];

export {projects};
