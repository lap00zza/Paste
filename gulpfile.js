// TODO: webpack preset env

const gulp = require("gulp");
const del = require("del");
const runSequence = require("run-sequence");
const sass = require("gulp-sass");
const ts = require("gulp-typescript");

const tsProject = ts.createProject("tsconfig.json");

gulp.task("clean_dist", function () {
    return del(["dist/**/*"]);
});

gulp.task("ts", function () {
    let tsResults = tsProject.src().pipe(tsProject());
    return tsResults.js.pipe(gulp.dest("dist"));
});

gulp.task("sass", function () {
    return gulp.src("src/assets/sass/**/*.sass")
        .pipe(sass())
        .pipe(gulp.dest("dist/assets/css"));
});

/* --- DEFAULT TASK --- */
// The default gulp task that runs when we
// just type `gulp`
gulp.task("default", function (callback) {
    runSequence(
        "clean_dist",
        "ts",
        "sass",
        callback
    );
});
