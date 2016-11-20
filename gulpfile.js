var gulp = require('gulp'),
    gutil = require('gulp-util'),
    compass = require('gulp-compass');

var sassSources = ['components/sass/style.scss'],

gulp.task('compass', function() {
  gulp.src(sassSources)
    .pipe(compass({
      sass: 'components/sass',
      image: 'builds/development/images',
      style: 'expanded'
    })
    .on('error', gutil.log))
    .pipe(gulp.dest('builds/development/css'))
});

gulp.task('watch', function() {
  gulp.watch('components/sass/*.scss', ['compass']);
});
