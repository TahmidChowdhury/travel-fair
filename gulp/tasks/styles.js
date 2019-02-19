var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
plumber = require('gulp-plumber'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimport = require('postcss-import');

gulp.task('styles', styles);
function styles() {
  console.log("Styles task ran.");
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(plumber())
  .pipe(postcss([cssimport, cssvars, nested, autoprefixer]))
  .pipe(gulp.dest('./app/temp/styles'));
};
