module.umdify
=============

Gulp plugin to convert [mujs modules](https://github.com/mujs/module) to
[UMD modules](https://github.com/umdjs/umd)

Usage
-----

```js
var gulp = require('gulp');
var umdify = require('module.umdify');

gulp.task('scripts', function () {
  return gulp.src('src/**/*.js')
    .pipe(umdify())
    .pipe(gulp.dest('dist'));
});
```

Install
-------

    npm install --save-dev mujs/module.umify

References
----------

  * <https://github.com/umdjs/umd>
  * <https://github.com/eduardolundgren/gulp-umd>
  * <https://github.com/AntouanK/gulp-wrapper>
  * <https://github.com/rogeriopvl/gulp-mustache>
