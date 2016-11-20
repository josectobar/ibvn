var gulp = require ('gulp'),
    gutil = require ('gulp-util'),
    compass = require ('gulp-compass');

var sassSources = ['builds/components/sass/styles.scss'];

gulp.task ('compass', function() {
  gulp.src(sassSources)
  .pipe(compass({
    sass: 'builds/components/sass',
    image: 'builds/development/images',
    style: 'expanded'
  })
  .on('error', gutil.log))
  .pipe(gulp.dest('builds/development/css'))
});

gulp.task ('watch', function() {
  gulp.watch('builds/components/sass/*.scss', ['compass'])
});
