var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimport = require('postcss-import');

gulp.task('default', function(){
    console.log("gulp task created");
});

gulp.task('html', html);
function html(done) {
  console.log("Imagine something useful being done to your HTML here");
  if(done) done();
}
gulp.task('styles', styles);
function styles() {
  console.log("Styles task ran.");
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssimport, cssvars, nested, autoprefixer]))
  .pipe(gulp.dest('./app/temp/styles'));
};

gulp.task('watch', function(){
    watch('./app/index.html', function(){
        html();
    });
    watch('./app/assets/styles/**/*.css', function() {
        styles();
    });
    watch('./app/assets/styles/**/*.scss', function() {
        styles();
    });
});