import gulp from 'gulp'
import del from 'del'
import babel from 'gulp-babel'
import newer from 'gulp-newer'

const scripts = [
  'LeetCode/*',
  'Math/*',
  'Reverse/*',
  'Strings/*',
  'DataStructures/*'
]
const distPath = './dist'

// Remove all compiled scripts
gulp.task('clean', cb => del(['./dist'], { dot: true }))

// Watch scripts
gulp.task('watch', () => {
  gulp.watch(scripts, ['default'])
})

// Default task
gulp.task('default', ['clean'], () => {

  gulp
    .src(scripts)
    .pipe(babel())
    .pipe(gulp.dest(distPath))
})
