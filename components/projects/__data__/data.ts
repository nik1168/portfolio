import {Project} from '../typings';

export const projectOne: Project = {
  name: 'Tinder Clone',
  image:
    'https://github.com/nik1168/tinder-clone/raw/develop/demo/main_view_p_1.png',
  description:
    'Building a Tinder clone using React Native and Typescript with the following features: \n Google Sign-in\n' +
    'Chat Messaging\n' +
    'Swipe-able cards with swipe animations\n' +
    'Matching algorithm using Firestore as a persistence layer',
  demoUrl: 'https://github.com/nik1168/tinder-clone',
  localImage: false,
};

export const projectTwo: Project = {
  name: 'Coverage Hole Detection Algorithm',
  image: 'projects/coverage.png',
  description:
    'Implementation of an algorithm that detects coverage holes in wireless sensor networks applying computational geometry.',
  demoUrl: 'https://nik1168.github.io/coverage-hole-detection-simulator/',
  localImage: true,
};

export const projectThree: Project = {
  name: 'Twitter Popularity Tracking App',
  image: 'https://cdn.worldvectorlogo.com/logos/rxjs-1.svg',
  description:
    'Implementation of a twitter popularity tracking app using RxJs and React. An interesting project that combines observables with react.',
  demoUrl: 'https://github.com/nik1168/Twitter-Popularity-Tracking-App',
  localImage: false,
};

export const projectFour: Project = {
  name: 'Twitter Clone',
  image:
    'https://github.com/nik1168/twitter-clone/raw/develop/demo/main_screen.png',
  description:
    'Twitter clone using Nextjs and Sanity with the following features:',
  demoUrl: 'https://twitter-clone-black-five.vercel.app/',
  localImage: false,
};

export const projectFive: Project = {
  name: 'Jokes Generator',
  image: 'projects/jokes.png',
  description:
    'Welcome to Nik Jokes, a place where you can laugh a little bit and forget about your problems for a moment.',
  demoUrl: 'https://nik-jokes.fly.dev/',
  localImage: true,
};

export const projects: Project[] = [
  projectOne,
  projectTwo,
  projectFour,
  projectThree,
  projectFive,
];
