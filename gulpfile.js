const gulp = require('gulp');
const plugin = require('gulp-load-plugins')();

const files = {
  js: [
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js',
    './src/js/script.js'
  ],
  css: [
    './src/css/style.scss'
  ],
  images: [
    './src/images/*'
  ]
}

const sassBasePath = [
  './src/css/',
  './node_modules/bootstrap-sass/assets/stylesheets'
];

gulp.task('js', () => {
  return gulp.src(files.js)
    .pipe(plugin.uglify())
    .pipe(plugin.concat('all.js'))
    .pipe(gulp.dest('./public/assets/js/'))
});

gulp.task('css', () => {
  return gulp.src(files.css)
    .pipe(plugin.sass({
      includePaths: sassBasePath
    }).on('error', plugin.sass.logError))
    .pipe(plugin.autoprefixer())
    .pipe(plugin.cssnano())
    .pipe(plugin.concat('style.css'))
    .pipe(gulp.dest('./public/assets/css/'))
});

gulp.task('images', () => {
  return gulp.src(files.images)
    .pipe(plugin.imagemin({progressive: true}))
    .pipe(gulp.dest('./public/assets/images/'))
});

gulp.task('watch', () => {
  gulp.watch(files.js, ['js']);
  gulp.watch(files.css, ['css']);
  gulp.watch(files.images, ['images']);
});

gulp.task('default', ['js', 'css', 'images', 'watch']);
gulp.task('bundle', ['js', 'css', 'images'])
