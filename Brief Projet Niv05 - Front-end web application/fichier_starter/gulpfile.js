var gulp = require('gulp');

// Compilation SASS 
gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
      .pipe(sass())
      .pipe(gulp.dest('app/css'))
        stream: true
      }))
  });
