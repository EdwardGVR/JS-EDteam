import gulp from 'gulp';
import babel from 'gulp-babel';

// Se recomienda la forma de arriba en vez de 
// const gulp = require('gulp');

//gulp.task();	// Define una tarea
//gulp.src();		// Indica un directorio de origen en el cual trabajara gulp
//gulp.dest();	// Directorio de destino de los archivos ya procesados
//gulp.watch();	// Observa los cambios en un directorio o archivo y cuando hay un cambio realiza la tarea indicada

gulp.task('es6', () => {
	gulp.src('./es6/*.js')
		.pipe(babel())
		.pipe(gulp.dest('./es5'))
});

gulp.task('default', () => {
	gulp.watch('./es6/*.js', ['es6']);
});