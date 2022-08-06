import {src, dest} from 'gulp'
import {plugins} from '../config/plugins'

class Mix {
    static jsTranspile(source, output) {
        src(source)
            .pipe(dest(output))
            .pipe(plugins.rename({suffix: '.min'}))
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.sourcemaps.write('./'))
            .pipe(dest(output));
    }
}

module.exports = Mix;
