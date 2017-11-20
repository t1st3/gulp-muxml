# gulp-muxml [![Build Status Travis](https://travis-ci.org/t1st3/gulp-muxml.svg?branch=master)](https://travis-ci.org/t1st3/gulp-muxml) [![Coverage Status](https://codecov.io/gh/t1st3/gulp-muxml/badge.svg?branch=master)](https://codecov.io/gh/t1st3/gulp-muxml?branch=master)

> An XML parsing and formatting plugin for [`gulp`](http://gulpjs.com/)

Thin wrapper around [`muxml`](https://github.com/t1st3/muxml) to make it a gulp plugin.

Also available as a [Grunt plugin](https://github.com/t1st3/grunt-muxml).


## Install

```
$ npm install --save gulp-muxml
```


## Usage

```js
const gulp = require('gulp');
const muxml = require('gulp-muxml');

gulp.task('default', () => {
    return gulp.src('src/*')
        .pipe(muxml({strict: true})
        .pipe(gulp.dest('dist'));
});
```


## API

Supports [streaming mode](https://github.com/gulpjs/gulp/blob/master/docs/API.md#optionsbuffer).

### muxml(options)

#### options

See [`muxml`'s options](https://github.com/t1st3/muxml#options), which are all supported.


## Related

* [muxml](https://github.com/t1st3/muxml) | API for muxml
* [muxml-cli](https://github.com/t1st3/muxml-cli) | CLI for muxml
* [grunt-muxml](https://github.com/t1st3/grunt-muxml) | muxml as a [`Grunt`](http://gruntjs.com/) plugin


## License

MIT © [t1st3](https://t1st3.com)
