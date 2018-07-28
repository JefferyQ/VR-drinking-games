var gulp = require("gulp");
var concat = require("gulp-concat");

gulp.task("start" , function () {
    console.log("Fakka Danny develop die shit");
    gulp.watch("app/js/scripts/*.js", ["js"])
});

gulp.task('js', function (done) {

    var scriptSources = [
        'app/js/libaries/three.min.js',
        'app/js/libaries/StereoEffect.js',
        'app/js/libaries/DeviceOrientationControls.js',
        'app/js/libaries/OrbitControls.js',
        'app/js/scripts/*.js',
    ];
    gulp.src(scriptSources)
        .pipe(concat('script.js'))
        .pipe(gulp.dest('app/js/'));
    done();
});