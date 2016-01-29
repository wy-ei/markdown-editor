var gulp = require('gulp'),
	less = require('gulp-less');


gulp.task('css',function(){
	gulp.src("less/style.less")
		.pipe(less())
		.on('error', function(e){
			console.log(e.message);
		})
		.pipe(gulp.dest("./css/"));
});

gulp.task('watch',function(){
	gulp.watch('less/style.less',['css']);
});