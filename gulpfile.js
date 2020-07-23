let gulp = require("gulp");
let sass = require("gulp-sass");
let homeworkNumber = "014_1";
let sassDest = `./Homework_${homeworkNumber}/styles/sass/*.scss`;
let cssDest = `./Homework_${homeworkNumber}/styles`;

gulp.task("hello", () => {
    console.log("hello my dude");
});

gulp.task(
    "sass",
    () => gulp.src(sassDest).pipe(sass()).pipe(gulp.dest(cssDest))
    // done();
);

gulp.task("watch", () => {
    gulp.watch(sassDest, gulp.series(["sass"]));
});
