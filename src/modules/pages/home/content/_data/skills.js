import { ICO_AndroidSTD } from '../icons/ICO_AndroidSTD';
import { ICO_CPP } from '../icons/ICO_CPP';
import { ICO_CS } from '../icons/ICO_CS';
import { ICO_CSharp } from '../icons/ICO_CSharp';
import { ICO_CSS3 } from '../icons/ICO_CSS3';
import { ICO_DevAndroid } from '../icons/ICO_DevAndroid';
import { ICO_DevMore } from '../icons/ICO_DevMore';
import { ICO_DevSoftware } from '../icons/ICO_DevSoftware';
import { ICO_DevWebsite } from '../icons/ICO_DevWebsite';
import { ICO_DotNet } from '../icons/ICO_DotNet';
import { ICO_Figma } from '../icons/ICO_Figma';
import { ICO_FireStore } from '../icons/ICO_FireStore';
import { ICO_Git } from '../icons/ICO_Git';
import { ICO_HTML5 } from '../icons/ICO_HTML5';
import { ICO_Java } from '../icons/ICO_Java';
import { ICO_Javascript } from '../icons/ICO_Javascript';
import { ICO_NodeJS } from '../icons/ICO_NodeJS';
import { ICO_QT } from '../icons/ICO_QT';
import { ICO_ReactJS } from '../icons/ICO_ReactJS';
import { ICO_Realm } from '../icons/ICO_Realm';
import { ICO_SDLC } from '../icons/ICO_SDLC';
import { ICO_SQLite } from '../icons/ICO_SQLite';
import { ICO_Tailwind } from '../icons/ICO_Tailwind';
import { ICO_Trello } from '../icons/ICO_Trello';
import { ICO_VS } from '../icons/ICO_VS';
import { ICO_VSCode } from '../icons/ICO_VSCode';

const skillset = [
  {
    Icon: ICO_DevWebsite,
    title: 'Web Development',
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
    skillscat: [
      {
        label: 'Languages',
        items: [
          { Icon: ICO_HTML5, label: 'HTML5' },
          { Icon: ICO_CSS3, label: 'CSS3' },
          { Icon: ICO_Javascript, label: 'JavaScript' },
        ],
      },

      {
        label: 'Libraries & Frameworks',
        items: [
          { Icon: ICO_Tailwind, label: 'Tailwind' },
          { Icon: ICO_ReactJS, label: 'ReactJS' },
          { Icon: ICO_NodeJS, label: 'NodeJS' },
        ],
      },

      {
        label: 'Tools',
        items: [
          { Icon: ICO_Git, label: 'Git' },
          { Icon: ICO_VSCode, label: 'VSC' }
        ],
      },
    ],
  },

  {
    Icon: ICO_DevAndroid,
    title: 'Android Development',
    skills: [
      { Icon: ICO_Java, label: 'Java' },
      { Icon: ICO_Realm, label: 'Realm' },
      { Icon: ICO_SQLite, label: 'SQLite' },
      { Icon: ICO_FireStore, label: 'Firestore' },
      { Icon: ICO_Git, label: 'Git' },
      { Icon: ICO_AndroidSTD, label: 'AD Studio' },
    ],
    skillscat: [
      {
        label: 'Languages',
        items: [{ Icon: ICO_Java, label: 'Java' }],
      },

      {
        label: 'Databases',
        items: [
          { Icon: ICO_Realm, label: 'Realm' },
          { Icon: ICO_SQLite, label: 'SQLite' },
          { Icon: ICO_FireStore, label: 'Firestore' },
        ],
      },

      {
        label: 'Tools',
        items: [
          { Icon: ICO_Git, label: 'Git' },
          { Icon: ICO_AndroidSTD, label: 'AS' }],
      },
    ],
  },

  {
    Icon: ICO_DevSoftware,
    title: 'Software Development',
    skills: [
      { Icon: ICO_CPP, label: 'C++' },
      { Icon: ICO_CSharp, label: 'C#' },
      { Icon: ICO_DotNet, label: '.NET' },
      { Icon: ICO_QT, label: 'Qt' },
      { Icon: ICO_VS, label: 'VS' }
    ],
    skillscat: [
      {
        label: 'Languages',
        items: [
          { Icon: ICO_CPP, label: 'C++' },
          { Icon: ICO_CSharp, label: 'C#' }
        ],
      },

            {
        label: 'Libraries & Frameworks',
        items: [
          { Icon: ICO_DotNet, label: '.NET' },
        ],
      },


      {
        label: 'Tools',
        items: [
          { Icon: ICO_QT, label: 'Qt' },
          { Icon: ICO_VS, label: 'VS' }
        ],
      },
    ],
  },

  {
    Icon: ICO_DevMore,
    title: 'Others',
    skills: [
          { Icon: ICO_Trello, label: 'Trello' },
          { Icon: ICO_Figma, label: 'Figma' },
          { Icon: ICO_SDLC, label: 'Agile' },
    ],
    skillscat: [
      {
        label: 'Others  ',
        items: [
          { Icon: ICO_Trello, label: 'Trello' },
          { Icon: ICO_Figma, label: 'Figma' },
          { Icon: ICO_SDLC, label: 'Agile' },
        ],
      },
    ],
  },
];

const labels = {
  forte: 'Forte',
  techstack: 'Technology Stack',
};

export { skillset, labels };
