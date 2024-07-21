import webstudio from '../images/projects/webstudio.png'
const { nanoid } = require("nanoid");

export const projects = [
    {
        id: nanoid(),
        label: 'WebStudio',
        codeLink: 'https://github.com/OlexTS/goit-markup-hw-08',
        siteLink: 'https://olexts.github.io/goit-markup-hw-08/',
        description: 'This is a responsive website. Web Studio - effective solutions for your business',
        workDetails: 'Personal project',
        technologies: ['HTML5', 'SCSS'],
        image: webstudio
    }
]