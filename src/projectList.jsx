import waldo from '../src/assets/images/waldo.png';
import admin from '../src/assets/images/admin.png';
import biotyplants from '../src/assets/images/biotyplants.png';
import todo from '../src/assets/images/todo.png';
import calculator from '../src/assets/images/calculator.png';
import drawing from '../src/assets/images/drawing.png';
import library from '../src/assets/images/library.png';
import quizzos from '../src/assets/images/quizzos.png';
import restaurant from '../src/assets/images/restaurant.png';
import rockpaperscissors from '../src/assets/images/rockpaperscissors.png';
import signup from '../src/assets/images/signup.png';
import tictactoe from '../src/assets/images/tictactoe.png';
import weather from '../src/assets/images/weather.png';

const projectList = [
  {
    id: 1,
    name: 'Where is Luffy?',
    description:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    date: 'asd',
    src: waldo,
    githubLink: 'https://github.com/disconico/where-s-luffy',
    hostingLink: 'https://where-s-waldo-9fd46.web.app/',
    techs: {
      react: true,
      css: true,
      firebase: true,
      router: true,
      javaScript: false,
      materialUI: true,
      vite: true,
    },
  },
  {
    id: 2,
    name: 'Biotyplants',
    description:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    date: 'asd',
    src: biotyplants,
    githubLink: 'https://github.com/disconico/shopping_cart',
    hostingLink: 'https://disconico.github.io/shopping_cart/',
    techs: {
      react: true,
      css: true,
      firebase: false,
      router: true,
      javaScript: false,
      materialUI: false,
      vite: true,
    },
  },
  {
    id: 3,
    name: 'Quizzos',
    description:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: 'asd',
    src: quizzos,
    githubLink: 'https://github.com/disconico/react-quiz',
    hostingLink: 'https://disconico.github.io/react-quiz/',
    techs: {
      react: true,
      css: true,
      firebase: false,
      router: false,
      javaScript: false,
      materialUI: false,
      vite: true,
    },
  },
  {
    id: 4,
    name: 'My Weather',
    description:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: 'asd',
    src: weather,
    githubLink: 'https://github.com/disconico/weather-app',
    hostingLink: 'https://disconico.github.io/weather-app/',
    techs: {
      react: false,
      javaScript: true,
      css: true,
      firebase: false,
      router: false,
      materialUI: false,
      vite: false,
      webpack: true,
    },
  },
  {
    id: 5,
    name: 'To DO !',
    description:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: 'asd',
    src: todo,
    githubLink: 'https://github.com/disconico/to-do-list',
    hostingLink: 'https://disconico.github.io/to-do-list/',
    techs: {
      react: false,
      javaScript: true,
      css: true,
      firebase: false,
      router: false,
      materialUI: false,
      vite: false,
      webpack: true,
    },
  },
  {
    id: 6,
    name: 'La Buona Cucina',
    description:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: 'asd',
    src: restaurant,
    githubLink: 'https://github.com/disconico/restaurant-page',
    hostingLink: 'https://disconico.github.io/restaurant-page/',
    techs: {
      react: false,
      javaScript: true,
      css: true,
      firebase: false,
      router: false,
      materialUI: false,
      vite: false,
      webpack: true,
    },
  },
  {
    id: 7,
    name: 'Book Librabry',
    description:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: 'asd',
    src: library,
    githubLink: 'https://github.com/disconico/library',
    hostingLink: 'https://disconico.github.io/library/',
    techs: {
      react: false,
      javaScript: true,
      css: true,
      firebase: false,
      router: false,
      materialUI: false,
      vite: false,
      webpack: true,
    },
  },
  {
    id: 8,
    name: 'Tic-Tac-Toe',
    description:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: 'asd',
    src: tictactoe,
    githubLink: 'https://github.com/disconico/tic-tac-toe',
    hostingLink: 'https://disconico.github.io/tic-tac-toe/',
    techs: {
      react: false,
      javaScript: true,
      css: true,
      firebase: false,
      router: false,
      materialUI: false,
      vite: false,
      webpack: true,
    },
  },
  {
    id: 9,
    name: 'Personnal Dashboard',
    description:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: 'asd',
    src: admin,
    githubLink: 'https://github.com/disconico/admin-dashboard',
    hostingLink: 'https://disconico.github.io/admin-dashboard/',
    techs: {
      react: false,
      javaScript: false,
      css: true,
      firebase: false,
      router: false,
      materialUI: false,
      vite: false,
      webpack: true,
    },
  },
  {
    id: 10,
    name: 'Sign-up form',
    description:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: 'asd',
    src: signup,
    githubLink: 'https://github.com/disconico/signup-form',
    hostingLink: 'https://disconico.github.io/signup-form/',
    techs: {
      react: false,
      javaScript: false,
      css: true,
      firebase: false,
      router: false,
      materialUI: false,
      vite: false,
      webpack: true,
    },
  },
  {
    id: 11,
    name: 'Calculator',
    description:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: 'asd',
    src: calculator,
    githubLink: 'https://github.com/disconico/calculator',
    hostingLink: 'https://disconico.github.io/calculator/',
    techs: {
      react: false,
      javaScript: true,
      css: true,
      firebase: false,
      router: false,
      materialUI: false,
      vite: false,
      webpack: true,
    },
  },
  {
    id: 12,
    name: 'Etch-a-sketch',
    description:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: 'asd',
    src: drawing,
    githubLink: 'https://github.com/disconico/drawing',
    hostingLink: 'https://disconico.github.io/drawing/',
    techs: {
      react: false,
      javaScript: true,
      css: true,
      firebase: false,
      router: false,
      materialUI: false,
      vite: false,
      webpack: true,
    },
  },
  {
    id: 13,
    name: 'Rock Paper Scissors',
    description:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: 'asd',
    src: rockpaperscissors,
    githubLink: 'https://github.com/disconico/rock-paper-scissors',
    hostingLink: 'https://disconico.github.io/rock-paper-scissors/',
    techs: {
      react: false,
      javaScript: true,
      css: true,
      firebase: false,
      router: false,
      materialUI: false,
      vite: false,
      webpack: true,
    },
  },
];

export default projectList;
