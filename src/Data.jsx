import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from 'react-icons/fa';

import skillsImg1 from './assets/html-logo.svg';
import skillsImg2 from './assets/css-logo.svg';
import skillsImg3 from './assets/javascript-logo.svg';
import skillsImg4 from './assets/react-logo.svg';
import skillsImg5 from './assets/tailwind-css-logo.svg';

import skillsImg6 from './assets/figma-logo.svg';
import skillsImg7 from './assets/sketch-logo.svg';
import skillsImg8 from './assets/adobe-xd-logo.svg';
import skillsImg9 from './assets/adobe-photoshop-logo.svg';
import skillsImg10 from './assets/invision-logo.svg';


export const links = [
  {
    name: 'Home',
    icon: <FaHome className='nav-icon' />,
    path: '/',
  },

  {
    name: 'About',
    icon: <FaUser className='nav-icon' />,
    path: '/about',
  },

  {
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav-icon' />,
    path: '/portfolio',
  },

  {
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav-icon' />,
    path: '/contact',
  },
];


export const personalInfo = [
  {
    title: 'First Name : ',
    description: 'Hasan',
  },

  {
    title: 'Last Name : ',
    description: 'Mahmud',
  },

  {
    title: 'Age : ',
    description: '28 Years',
  },

  {
    title: 'Nationality : ',
    description: 'Bangladeshi',
  },

  {
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    title: 'Address : ',
    description: 'Dhaka,Bangladesh',
  },

  {
    title: 'Phone : ',
    description: '+8801755-327835',
  },

  {
    title: 'Email : ',
    description: 'hasanmahmud.biddut@gmail.com',
  },

  {
    title: 'Skype : ',
    description: 'Hasan Mahmud',
  },

  {
    title: 'Langages : ',
    description: 'Bangla, English',
  },
];


export const stats = [
  {
    no: '1+',
    title: 'Years of <br /> Experience',
  },

  {
    no: '10+',
    title: 'Completed <br /> Projects',
  },

  {
    no: '++',
    title: 'Happy <br /> Customers',
  },

  {
    no: '++',
    title: ' Awards <br /> Won',
  },
];


export const skill = [
  {
    id: 1,
    img: skillsImg1,
    title: 'HTML',
    level: 'Intermediate',
    category: 'developer',
  },

  {
    id: 2,
    img: skillsImg2,
    title: 'CSS',
    level: 'Advanced',
    category: 'developer',
  },

  {
    id: 3,
    img: skillsImg3,
    title: 'JavaScript',
    level: 'Intermediate',
    category: 'developer',
  },

  {
    id: 4,
    img: skillsImg4,
    title: 'React',
    level: 'Basic',
    category: 'developer',
  },

  {
    id: 5,
    img: skillsImg5,
    title: 'Tailwind',
    level: 'Intermediate',
    category: 'developer',
  },

  {
    id: 6,
    img: skillsImg6,
    title: 'Figma',
    level: 'Advanced',
    category: 'designer',
  },

  {
    id: 7,
    img: skillsImg7,
    title: 'Sketch',
    level: 'Basic',
    category: 'designer',
  },

  {
    id: 8,
    img: skillsImg8,
    title: 'Adobe XD',
    level: 'Intermediate',
    category: 'designer',
  },

  {
    id: 9,
    img: skillsImg9,
    title: 'Photoshop',
    level: 'Intermediate',
    category: 'designer',
  },

  {
    id: 10,
    img: skillsImg10,
    title: 'InvisionApp',
    level: 'Basic',
    category: 'designer',
  },
];

