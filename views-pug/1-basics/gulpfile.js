var gulp 			= require('gulp');
var browserSync 	= require('browser-sync');
var sass 			= require('gulp-sass');
var sourcemaps 		= require('gulp-sourcemaps');
var autoprefixer 	= require('gulp-autoprefixer');
var cleanCSS 		= require('gulp-clean-css');
var uglify 			= require('gulp-uglify');
var concat 			= require('gulp-concat');
var pug 			= require('gulp-pug');



gulp.task('reload', function(){
	browserSync.reload();
});

gulp.task('serve', ['sass', 'pug'], function(){
	browserSync({
		server: 'src'
	});

	gulp.watch('src/*html', ['reload']);
	gulp.watch('src/sass/**/*.sass', ['sass']);
	gulp.watch('src/views-pug/**/*.pug', ['pug']);
});

gulp.task('pug', function(){
	return gulp.src('src/views-pug/**/*.pug')
	.pipe(pug({pretty: true}))
	.pipe(gulp.dest('src'))
	.pipe(browserSync.stream());
});


gulp.task('sass', function(){
	return gulp.src('src/sass/**/*.sass')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 3 versions']
	}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('src/css'))
	.pipe(browserSync.stream());
});


gulp.task('css', function(){
	return gulp.src('src/css/**/*.css')
	.pipe(concat('style.css'))
	.pipe(cleanCSS())
	.pipe(gulp.dest('dist/css'));
});

gulp.task('js', function(){
	return gulp.src('src/js/**/*.js')
	.pipe(concat('script.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});


gulp.task('default', ['serve']);


