const init = require('gulp'); // Основной модуль;
const {plugins} = require('./config/plugins'); // Плагины по-умолчанию;

// Передача значений в глобальную переменную;
global.gulp = {
    init: init,
    plugins: plugins,
}

const mix = require('./src/Mix');

module.exports = mix;
