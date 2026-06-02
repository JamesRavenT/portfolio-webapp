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
import { ICO_DevAI } from '../icons/ICO_DevAI';
import { ICO_Typescript } from '../icons/ICO_Typescript';
import { ICO_NextJS } from '../icons/ICO_NextJS';
import { ICO_Python } from '../icons/ICO_Python';
import { ICO_n8n } from '../icons/ICO_n8n';
import { ICO_Supabase } from '../icons/ICO_Supabase';
import { ICO_VSCode } from '../icons/ICO_VSCode';

function project(
  name,
  icon,
  imageMB,
  imagePC,
  platform,
  stack,
  description,
) {
  return {
    name,
    icon,
    imageMB,
    imagePC,
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
    '/images/projects/wazabipos/wazabiposICO.png',
    '/images/projects/wazabipos/wazabiposMB.png',
    '/images/projects/wazabipos/wazabiposPC.png',
    [ICO_Android],
    [ICO_Java, ICO_Realm, ICO_FireStore, ICO_AndroidSTD, ICO_Git],
    'Final year project during my Computer Science degree. A mobile POS integrated with a machine learning algorithm to track consumer behavior. It highlights frequent meal combinations while providing core POS features, such as inventory management, and sales forecasting.',
  ),
  intellitask: project(
    'Intellitask',
    '/images/projects/intellitask/intellitaskICO.png',
    '/images/projects/intellitask/intellitaskMB.png',
    '/images/projects/intellitask/intellitaskPC.png',
    [ICO_DevWebsite],
    [ICO_HTML5, ICO_CSS3, ICO_Javascript, ICO_Typescript, ICO_NodeJS, ICO_NextJS, ICO_ReactJS, ICO_Supabase, ICO_n8n, ICO_Git, ICO_VSCode],
    'An AI-powered project assistant that generates tasks and project roadmaps, with automated Google Calendar scheduling and Trello card creation through n8n workflows'
  )
};

export { label, projects };
