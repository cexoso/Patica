var gulp = require('gulp'),
  connect = require('gulp-connect'),
   jshint = require('gulp-jshint'),
   concat=require('gulp-concat'),
   jsmin=require('gulp-jsmin'),
   es=require('event-stream'),
   inject=require('gulp-inject'),
   bowerFiles=require('main-bower-files');

gulp.task('server', function() {
  connect.server({
    root: ['app','bower_components','node_modules'],
    livereload: true,
    middleware: function(connect, opt) {
      return [
        function(req,res,next){
          console.log(req)
          next();
        }
      ]
    },
    port:80
  });
  var rel=['app/views/**/*.html','app/scripts/**/*.js','app/styles/**/*.css'];
  gulp.watch(rel,function(){
    gulp.src('./app/*.html')
    .pipe(connect.reload());
  });
});

gulp.task('lint', function() {
   var js=['app/scripts/**/*.js'];
    gulp.watch(js,function(){
        gulp.src(js)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
    });
});

gulp.task('default', ['server']);

gulp.task('build',function(){
  var path='app/scripts/**/*.js';
  
  gulp.src(path)
          .pipe(concat('all.js'),{newLine: ';'})
          .pipe(jsmin())
          .pipe(gulp.dest('dist/'));
 
   var arr=[
      'bower_components/angular/angular.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-bootstrap/ui-bootstrap.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.js'
    ];

  gulp.src(arr)
    .pipe(concat('lib.js'),{newLine: ';'})
    .pipe(jsmin())
    .pipe(gulp.dest('dist/'));
 

  gulp.src('app/views/**/*')
  .pipe(gulp.dest('dist/views'));
});


// gulp.task('injectIndex',function(){
//    gulp.src('app/index.html')
//   .pipe(inject(lib, {name: 'bower'}))
//   .pipe(inject(js, {name: 'inject'}))
//   .pipe(gulp.dest('dist/')); 
// })