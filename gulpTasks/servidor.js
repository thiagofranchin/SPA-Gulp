const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')

gulp.task('monitorarMudanças', () => {
    watch('src/**/*.html', () => gulp.start('appHtml'))
    watch('src/**/*.scss', () => gulp.start('appCss'))
    watch('src/**/*.js', () => gulp.start('appJs'))
    watch('src/assets/imgs/**/*.*', () => gulp.start('appImgs'))
})

gulp.task('servidor', ['monitorarMudanças'], () => {
    return gulp.src('build').pipe(webserver({
        livereload: true,
        port: 8080,
        open: true
    }))
})