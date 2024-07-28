import webstudio from '../images/projects/webstudio.png';
import foodsta from '../images/projects/foodSta.png';
import filmoteka from '../images/projects/filmoteka.png';
import imagefinder from '../images/projects/imageFinder.png';
import movies from '../images/projects/movies.png';
import phonebook from '../images/projects/phonebook.png';
import yourpet from '../images/projects/yourPet.png'

const { nanoid } = require('nanoid');

export const projects = [
  {
    id: nanoid(),
    label: 'WebStudio',
    codeLink: 'https://github.com/OlexTS/goit-markup-hw-08',
    siteLink: 'https://olexts.github.io/goit-markup-hw-08/',
    description:
      'This is a responsive website. Web Studio - effective solutions for your business.',
    workDetails: 'Personal project',
    technologies: ['HTML5', 'SCSS'],
    image: webstudio,
  },
  {
    id: nanoid(),
    label: 'FoodSta',
    codeLink: 'https://github.com/Shlov/goit-lucky-team-13-project',
    siteLink: 'https://shlov.github.io/goit-lucky-team-13-project/',
    description:
      "Foodsta. It's food delivering app. Enjoy your favorite food from anywhere.",
    workDetails: 'Team project',
    technologies: ['HTML5', 'SCSS', 'JavaScript', 'Parcel'],
    image: foodsta,
  },
  {
    id: nanoid(),
    label: 'Filmoteka',
    codeLink: 'https://github.com/haber-viacheslav/filmoteka',
    siteLink: 'https://haber-viacheslav.github.io/filmoteka/',
    description:
      'Filmoteka is a website for easy search and selection of your favorite movie.',
    workDetails: 'Team project',
    technologies: [
      'HTML5',
      'SASS',
      'JavaScript',
      'Parcel',
      'Axios',
      'REST API',
    ],
    image: filmoteka,
  },
  {
    id: nanoid(),
    label: 'Image finder',
    codeLink: 'https://github.com/OlexTS/goit-react-hw-03-image-finder',
    siteLink: 'https://olexts.github.io/goit-react-hw-03-image-finder/',
    description: 'Search images app with Pixabay service helping.',
    workDetails: 'Personal project',
    technologies: [
      'HTML5',
      'Styled components',
      'JavaScript',
      'React',
      'Parcel',
      'Axios',
      'REST API',
      'AJAX',
    ],
    image: imagefinder,
  },
  {
    id: nanoid(),
    label: 'Movies',
    codeLink: 'https://github.com/OlexTS/goit-react-hw-05-movies',
    siteLink: 'https://olexts.github.io/goit-react-hw-05-movies/',
    description: 'This is convenient app for watching popular movies.',
    workDetails: 'Personal project',
    technologies: [
      'HTML5',
      'Styled components',
      'JavaScript',
      'React',
      'Parcel',
      'Axios',
      'REST API',
      'AJAX',
    ],
    image: movies,
  },
 
  {
    id: nanoid(),
    label: 'Phonebook',
    codeLink: 'https://github.com/OlexTS/goit-react-hw-08-phonebook',
    siteLink: 'https://olexts.github.io/goit-react-hw-08-phonebook/',
    description:
      'Phonebook app with the possibility of registering users and storing personal contacts. Now your contacts are safe!',
    workDetails: 'Personal project',
    technologies: [
      'HTML5',
      'Styled components',
      'JavaScript',
      'React',
      'Redux',
      'Parcel',
      'Axios',
      'REST API',
      'AJAX',
    ],
    image: phonebook,
  },
  {
    id: nanoid(),
    label: 'Your pet',
    codeLink: 'https://github.com/Shlov/project-42-front',
    siteLink: 'https://shlov.github.io/project-42-front/',
    description:
      'With the help of this application you will take good care of your small pets.',
    workDetails: 'Team project',
    technologies: [
      'HTML5',
      'Styled components',
      'JavaScript',
      'React',
      'Redux',
      'Node.js',
      'Mongoose',
      'Express',
      'Swagger',
      'Parcel',
      'Axios',
      'REST API',
      'AJAX',
    ],
    image: yourpet,
  },
];
