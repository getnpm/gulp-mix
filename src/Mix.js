const gulp = require('gulp');

const defaultPlugins = {
    if: require('gulp-if'),
    rename: require('gulp-rename'),
    sourcemaps: require('gulp-sourcemaps')
};

class Mix {
    static js(src, output) {
        return gulp.src(src)
            .pipe(gulp.dest(output))
            .pipe(defaultPlugins.rename({suffix: '.min'}))
            .pipe(defaultPlugins.sourcemaps.init())
            .pipe(defaultPlugins.sourcemaps.write('./'))
            .pipe(gulp.dest(output));
    }
}

module.exports = Mix;
