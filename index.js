import init from 'gulp'; // Основной модуль;
import {plugins} from './config/plugins'; // Импорт плагинов;

// Передача значений в глобальную переменную;
global.gulp = {
    init: init,
    plugins: plugins,
}

const mix = require('./src/Mix');

module.exports = mix;
