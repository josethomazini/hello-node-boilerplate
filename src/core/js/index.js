import '@/core/css/style.css';

import runSamples from '@/samples/js/index';

import labelComponentFactory from '@/core/js/factories';

__webpack_nonce__ = 'c29tZSBjb29sIHN0cmluZyB3aWxsIHBvcCB1cCAxMjM='; // eslint-disable-line no-undef,camelcase

const label = labelComponentFactory('Hello World!');

document.body.appendChild(label);

runSamples();
