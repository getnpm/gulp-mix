import gulp from 'gulp'
import {plugins} from './config/plugins'

global.app = {
    gulp: gulp,
    plugins: plugins,
}

const mix = require('./src/Mix');

module.exports = mix;
