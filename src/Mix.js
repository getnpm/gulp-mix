const gulp = require('gulp');

class Mix {

    static _init = null;

    static get init() {
        return Mix._init || (Mix._init = new Mix());
    }

    static js(source, output) {
        gulp.src(source).pipe(gulp.dest(output));
    }
}

module.exports = Mix;
