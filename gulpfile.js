const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

// Завдання для упаковки файлів в архів
gulp.task('archive', async () => {
  // Використовуйте динамічний імпорт
  const { default: zip } = await import('gulp-zip');

  return gulp.src('dist/**/*')
    .pipe(zip('project-archive.zip'))
    .pipe(gulp.dest('dist'));
});

// Завдання за замовчуванням
gulp.task('default', gulp.series('archive'));
