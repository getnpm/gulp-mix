import gulp from 'gulp'
import {plugins} from '../config/plugins'

class Mix {
    static jsTranspile(source, output) {
        gulp.src(source)
            .pipe(gulp.dest(output))
            .pipe(plugins.rename({suffix: '.min'}))
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.sourcemaps.write('./'))
            .pipe(gulp.dest(output));
    }
}

module.exports = Mix;
