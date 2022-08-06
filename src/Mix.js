const gulp = require('gulp');

class Mix {
    static js(src, output) {
        return gulp.src(src).pipe(gulp.dest(output));
    }
}

module.exports = Mix;
