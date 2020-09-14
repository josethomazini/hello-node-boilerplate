__webpack_nonce__ = 'c29tZSBjb29sIHN0cmluZyB3aWxsIHBvcCB1cCAxMjM=';

import '@/core/css/style.css';

import { run_samples } from '@/samples/js/index'

import { labelComponentFactory } from '@/core/js/factories';

const label = labelComponentFactory('Hello World!');

document.body.appendChild(label);

run_samples();
