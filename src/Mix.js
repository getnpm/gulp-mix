const gulp = {
    init: require('gulp')
};

class Mix {
    static jsTranspile(source, output) {
        return gulp.init.src(source).pipe(gulp.init.dest(output));
    }
}

module.exports = Mix;
