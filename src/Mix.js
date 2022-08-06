class Mix {
    static jsTranspile(source, output) {
        gulp.init.src(source)
            .pipe(gulp.init.dest(output))
            .pipe(gulp.plugins.rename({suffix: '.min'}))
            .pipe(gulp.plugins.sourcemaps.init())
            .pipe(gulp.plugins.sourcemaps.write('./'))
            .pipe(gulp.init.dest(output));
    }
}

module.exports = Mix;
