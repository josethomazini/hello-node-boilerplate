import '../sass/style.scss';
import '../ts/index.ts';

import fileJson from '../data/file.json';
import fileXml from '../data/file.xml';
import squarePng from '../images/square.png';
import appConfig from '../data/file.json5';
import fileTxt from '../data/file.txt';

import { imageComponentFactory } from './factories'


export function run_samples() {
    const image = imageComponentFactory(squarePng);

    document.body.appendChild(image);

    console.log(fileJson)
    console.log(fileXml)
    console.log(appConfig.env);
    console.log(fileTxt)

}
