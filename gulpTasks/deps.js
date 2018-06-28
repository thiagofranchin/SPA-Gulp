const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

gulp.task('deps', ['depsCss', 'depsFonts'])

gulp.task('depsCss', () => {
    return gulp.src([
        'node_modules/font-awesome/css/font-awesome.css'
    ])
    .pipe(uglifycss({
        "uglyComments": true
    }))
    .pipe(concat('deps.min.css'))
    .pipe(gulp.dest('build/assets/css'))
})

gulp.task('depsFonts', () => {
    return gulp.src(['node_modules/font-awesome/fonts/*.*'])
        .pipe(gulp.dest('build/assets/fonts'))
})