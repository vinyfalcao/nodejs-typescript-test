var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var nodemon = require("gulp-nodemon");
var FileCache = require('gulp-file-cache');
var cache = new FileCache();

gulp.task("compile", function () {
    return tsProject.src()
        .pipe(cache.filter())
        .pipe(tsProject()).js
        .pipe(cache.cache())
        .pipe(gulp.dest("dist"));
});

gulp.task("start", ['compile'], function(){
    var stream = nodemon({
        script: 'dist/'
      , watch: 'src'
      , ext: "ts"
      , tasks: ['compile']
      });
    return stream;
})