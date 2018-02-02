//引入gulp
var gulp = require("gulp");
//引入sass
var sass = require("gulp-sass");
////压缩

//添加copyHtml任务,保存到指定目录
gulp.task("copyHtml",function(){
	gulp.src("*.html").pipe(gulp.dest("D:/phpStudy/WWW/section_Project"))

});
//添加copyPhp任务，保存到指定目录
gulp.task("copyPhp",function(){
	gulp.src("*.php").pipe(gulp.dest("D:/phpStudy/WWW/section_Project"))

});
//添加copyImg任务，保存到指定目录
gulp.task("copyImg",function(){
	gulp.src("img/**/*").pipe(gulp.dest("D:/phpStudy/WWW/section_Project/img"))

});
//copyJS任务，保存到指定目录
gulp.task("copyJs",function(){
	gulp.src("js/**.js").pipe(gulp.dest("D:/phpStudy/WWW/section_Project/js"))
});
//将转换成的css文件放到指定目录下
gulp.task("moveCss",function(){
	gulp.src("css/**.css").pipe(gulp.dest("D:/phpStudy/WWW/section_Project/css"))
});


//添加sass转换到css任务
gulp.task("sass",function(){
	gulp.src("css/**.scss")
	.pipe(sass())
	.pipe(gulp.dest("css"));
});



//添加自动监听任务功能
gulp.task("watch",function(){
	gulp.watch("*.html",["copyHtml"]);
	gulp.watch("*.php",["copyPhp"]);
	gulp.watch("img/**/*",["copyImg"]);
	gulp.watch("css/**.scss",["sass"]);
	gulp.watch("css/**.css",["moveCss"]);
	gulp.watch("js/**.js",["copyJs"]);
});
