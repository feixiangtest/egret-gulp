var gulp = require('gulp');
var ts = require('gulp-typescript');
var webserver = require('gulp-webserver'); 

// var sourcemaps = require('gulp-sourcemaps');
gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      port:8083,
      directoryListing: true,
      open: true,
      
      directoryListing:{
             enable:true,
             path:'./index.html'//从哪个目录下开始启动
        },
    }));
});

var tsProject = ts.createProject('tsconfig.json');
gulp.task('compile', function () {
    // return tsProject.src()
    //     // 注意顺序
    //     .pipe(tsProject())
    //     .pipe(gulp.dest('bin-debug'));

        return tsProject.src()

        // 注意顺序
        // .pipe(sourcemaps.init())
        .pipe(tsProject())
        // .pipe(sourcemaps.write())
         .pipe(gulp.dest('bin-debug'));




});
gulp.task('watch',function(){
    gulp.watch('./src/**/*',['compile']);
})
gulp.task('default', ['compile','webserver','watch']);