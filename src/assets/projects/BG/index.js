import BG_1 from './6a737b-8.png';
import BG_2 from './8a7967-8.png';
import BG_3 from './34bf49-8.png';
import BG_4 from './0085ad-8.png';
import BG_5 from './0099e5-8.png';
import BG_6 from './52325d-8.png';
import BG_7 from './a51890-8.png';
import BG_8 from './cf8d2e-8.png';
import BG_9 from './ffc20e-8.png';

const BG = [ BG_1, BG_2, BG_3, BG_4, BG_5, BG_6, BG_7, BG_8, BG_9 ];
const randomBG = Math.floor(Math.random() * BG.length);

export default BG[randomBG];