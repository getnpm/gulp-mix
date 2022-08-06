import init from 'gulp'

const gulp = {
    init: init
};

class Mix {
    static jsTranspile(source, output) {
        return gulp.init.src(source).pipe(gulp.init.dest(output));
    }
}

module.exports = Mix;
