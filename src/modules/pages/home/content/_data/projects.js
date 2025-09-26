import { ICO_Android } from '../icons/ICO_Android';
import { ICO_AndroidSTD } from '../icons/ICO_AndroidSTD';
import { ICO_CSS3 } from '../icons/ICO_CSS3';
import { ICO_DevWebsite } from '../icons/ICO_DevWebsite';
import { ICO_FireStore } from '../icons/ICO_FireStore';
import { ICO_Git } from '../icons/ICO_Git';
import { ICO_HTML5 } from '../icons/ICO_HTML5';
import { ICO_Java } from '../icons/ICO_Java';
import { ICO_Javascript } from '../icons/ICO_Javascript';
import { ICO_NodeJS } from '../icons/ICO_NodeJS';
import { ICO_ReactJS } from '../icons/ICO_ReactJS';
import { ICO_Realm } from '../icons/ICO_Realm';

function project(
  name,
  imageMB,
  imagePC,
  version,
  lastchange,
  status,
  platform,
  stack,
  description,
) {
  return {
    name,
    imageMB,
    imagePC,
    version,
    lastchange,
    status,
    platform,
    stack,
    description,
  };
}

const label = {
  status: 'STATUS',
  lastUpdate: 'LAST UPDATED',
  techstack: 'TECHNOLOGIES USED',
  description: 'DESCRIPTION',
};

const projects = {
  wazabipos: project(
    'WazabiPOS',
    '/images/projects/wazabiposMB.png',
    '/images/projects/wazabiposPC.png',
    'v1.0.0',
    'March 2023',
    'Completed',
    [ICO_Android],
    [ICO_Java, ICO_Realm, ICO_FireStore, ICO_AndroidSTD, ICO_Git],
    'My final year project was a mobile POS integrated with a machine learning algorithm to track consumer behavior and send insights to the business website. It highlights frequently bought-together meal combinations while providing core POS features, inventory management, and sales forecasting.',
  ),
  wazabipos2: project(
    'Portfolio',
    '/images/projects/portfolioMB.png',
    '/images/projects/portfolioPC.png',
    'v1.0.0',
    'September 2025',
    'Released - Active Updates',
    [ICO_DevWebsite],
    [ICO_HTML5, ICO_CSS3, ICO_Javascript, ICO_NodeJS, ICO_ReactJS],
    'My Own website containing information about me, skills, and projects that I had and have been working on.',
  ),
};

export { label, projects };
