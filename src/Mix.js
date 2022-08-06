class Mix {
    static jsTranspile(source, output) {
        app.gulp.src(source)
            .pipe(app.gulp.dest(output))
            .pipe(app.plugins.rename({suffix: '.min'}))
            .pipe(app.plugins.sourcemaps.init())
            .pipe(app.plugins.sourcemaps.write('./'))
            .pipe(app.gulp.dest(output));
    }
}

module.exports = Mix;
