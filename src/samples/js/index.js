import '@/samples/sass/style.scss';
import '@/samples/ts/index.ts';

import fileJson from '@/samples/data/file.json';
import fileXml from '@/samples/data/file.xml';
import squarePng from '@/samples/images/square.png';
import appConfig from '@/samples/data/file.json5';
import fileTxt from '@/samples/data/file.txt';

import { imageComponentFactory } from '@/samples/js/factories'


export function run_samples() {
    const image = imageComponentFactory(squarePng);

    document.body.appendChild(image);

    console.log(fileJson)
    console.log(fileXml)
    console.log(appConfig.env);
    console.log(fileTxt)

}
