const gulp = require('gulp');

class Mix {
    static jsTranspile(src, output) {
        return gulp.src(src).pipe(gulp.desc(output));
    }
}

module.exports = Mix;