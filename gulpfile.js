
var gulp = require("gulp");

gulp.task('copy-libs', function() {
    gulp.src('./node_modules/requirejs/require.js')
    .pipe(gulp.dest('./public/lib/'));
    gulp.src('./node_modules/jquery/dist/jquery.js')
    .pipe(gulp.dest('./public/js/web/'));
    gulp.src('./node_modules/navigo/lib/navigo.min.js')
    .pipe(gulp.dest('./public/lib/'));
});
gulp.task('default', [ 'copy-libs']);