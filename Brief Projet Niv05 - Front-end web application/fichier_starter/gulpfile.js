var gulp = require('gulp');

// Requires the gulp-sass plugin
var sass = require('gulp-sass');

// Variables de chemins
var source = './app'; // dossier de travail
var destination = './dist'; // dossier à livrer

var browserSync = require('browser-sync').create();

// Live Server
gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: 'app'
      },
    })
  })

// Compilation SASS 
gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
      .pipe(sass())
      .pipe(gulp.dest('app/css'))
        stream: true
      }))
  });
