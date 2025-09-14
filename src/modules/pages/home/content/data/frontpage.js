import { ICO_Github } from '../icons/ICO_Github';
import { ICO_LinkedIn } from '../icons/ICO_LinkedIn';

const wallpaper = {
  video: '/backgrounds/frontpage.mp4',
};

const headlines = {
  greeting: "Hello, I'm",
  name: 'Raven',
  role: 'Aspiring Software Developer',
};

const greetings = {
  line1: 'WELCOME TO',
  line2: 'MY WORLD',
};

const resume = {
  text1: 'Resume',
  text2: 'SCAN TO VIEW',
  text3: '- RESUME -',
  qr: '/images/resume-qr.png',
  link: 'https://docs.google.com/document/d/1dzSsqBpjQZ5WDe_AOqP2Ozee79v5ErxAYpsefPGlhRA/edit?tab=t.0',
  openLink: () => window.open(this.link),
};

const github = {
  text: 'Github',
  color: 'bg-black',
  icon: ICO_Github,
  link: 'https://github.com/JamesRavenT',
  altlink: 'github.com/JamesRavenT',
  openLink: () => window.open(this.link),
};

const linkedIn = {
  text: 'LinkedIn',
  color: 'bg-[#0A66C2]',
  icon: ICO_LinkedIn,
  link: 'https://www.linkedin.com/in/jamesravent/',
  altlink: 'linkedin.com/in/jamesravent/',
  openLink: () => window.open(this.link),
};

const sections = {
  aboutme: 'About Me',
  skills: 'Skills',
  projects: 'Projects',
};

export { wallpaper, headlines, greetings, resume, github, linkedIn, sections };
