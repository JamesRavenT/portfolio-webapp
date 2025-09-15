import { ICO_AndroidSTD } from '../icons/ICO_AndroidSTD';
import { ICO_CPP } from '../icons/ICO_CPP';
import { ICO_CSS3 } from '../icons/ICO_CSS3';
import { ICO_DevAndroid } from '../icons/ICO_DevAndroid';
import { ICO_DevSoftware } from '../icons/ICO_DevSoftware';
import { ICO_DevWebsite } from '../icons/ICO_DevWebsite';
import { ICO_FireStore } from '../icons/ICO_FireStore';
import { ICO_Git } from '../icons/ICO_Git';
import { ICO_HTML5 } from '../icons/ICO_HTML5';
import { ICO_Java } from '../icons/ICO_Java';
import { ICO_Javascript } from '../icons/ICO_Javascript';
import { ICO_NodeJS } from '../icons/ICO_NodeJS';
import { ICO_QT } from '../icons/ICO_QT';
import { ICO_ReactJS } from '../icons/ICO_ReactJS';
import { ICO_Realm } from '../icons/ICO_Realm';
import { ICO_SQLite } from '../icons/ICO_SQLite';
import { ICO_Tailwind } from '../icons/ICO_Tailwind';
import { ICO_VSCode } from '../icons/ICO_VSCode';

// Slides data with icons directly
const skillset = [
  {
    Icon: ICO_DevWebsite,
    title: 'Web Development',
    description: 'Building modern, responsive, and scalable web apps.',
    skills: [
      { Icon: ICO_HTML5, label: 'HTML5' },
      { Icon: ICO_CSS3, label: 'CSS3' },
      { Icon: ICO_Tailwind, label: 'Tailwind' },
      { Icon: ICO_Javascript, label: 'JavaScript' },
      { Icon: ICO_ReactJS, label: 'ReactJS' },
      { Icon: ICO_NodeJS, label: 'NodeJS' },
      { Icon: ICO_Git, label: 'Git' },
      { Icon: ICO_VSCode, label: 'VS Code' },
    ],
  },
  {
    Icon: ICO_DevAndroid,
    title: 'Android Development',
    description: 'Creating native and cross-platform mobile applications.',
    skills: [
      { Icon: ICO_Java, label: 'Java' },
      { Icon: ICO_Realm, label: 'Realm' },
      { Icon: ICO_SQLite, label: 'SQLite' },
      { Icon: ICO_FireStore, label: 'Firestore' },
      { Icon: ICO_Git, label: 'Git' },
      { Icon: ICO_AndroidSTD, label: 'AD Studio' },
    ],
  },
  {
    Icon: ICO_DevSoftware,
    title: 'Software Development',
    description: 'Designing and engineering software solutions.',
    skills: [
      { Icon: ICO_CPP, label: 'C++' },
      { Icon: ICO_QT, label: 'Qt' },
    ],
  },
];

export { skillset };
