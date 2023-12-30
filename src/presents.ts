import { Present } from "./models";
import present1 from './img/present1.png';
import present2 from './img/present2.png';
import present3 from './img/present3.png';

const presents = [] as Present[];
presents.push({
    id: 1,
    moneyCosts: 1000,
    pictureUrl: present1
});
presents.push({
    id: 1,
    moneyCosts: 1000,
    pictureUrl: present2
});
presents.push({
    id: 1,
    moneyCosts: 1000,
    pictureUrl: present3
});

export default presents;