/* eslint-disable quote-props */
import weenyDime from './weenyDime';
import dimeB120 from './dimeB120';
import card from './card';
import card16 from './card16';
import card24 from './card24';
import rayPlus from './rayPlus';
import microSD from './microSD';
import witness from './witness';

export const mapSerieToFile = {
    microSD,
    card,
    card16,
    card24,
    rayPlus,
    witness,
    weenyDime,
    dimeB120,
    
};

export const mapModelToFile = {
    '3D Recorder': card24,
    'Свидетель 3': witness,
    'A23': microSD,
    'A23L': microSD,
    'A91': card,
    'A94-2': card,
    'A94-3': card,
    'A94W': card,
    'B94': card,
    'B94W': card,
    'A95': card16,
    'A96': card16,
    'A97': card16,
    'A98': card,
    'A99': card16,
    'A101': card24,
    'A102': card24,
    'A105': rayPlus,
    'A106': card24,
    'A108': card24,
    'A110': weenyDime,
    'A111': weenyDime,
    'A113': weenyDime,
    'B120': dimeB120,
    'A124': weenyDime,
    'A125': weenyDime,
    'A128': weenyDime,
};
