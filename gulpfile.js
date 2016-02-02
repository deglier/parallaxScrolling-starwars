var gulp          =   require('gulp');
var browserSync   =   require('browser-sync');
var reload        =   browserSync.reload;


gulp.task('reload-css', function(){
  return gulp.src('assets/css/**/*.css')
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('reload-js', function(){
  return gulp.src('assets/js/**/*.js')
    .pipe(browserSync.reload({stream:true}));
});
gulp.task('reload', reload);


gulp.task('default', function(){
  browserSync({server: './'});
  gulp.watch('./**/*.html', ['reload']);
  gulp.watch('assets/css/**/*.css', ['reload-css']);
  gulp.watch('assets/js/**/*.js', ['reload-js']);
});
