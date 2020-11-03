// eslint-disable-next-line import/no-unassigned-import
import './options-storage';
import {drawIcon} from './icon'

const seconds = 1000;

drawIcon();
setInterval(drawIcon, 60*seconds);

