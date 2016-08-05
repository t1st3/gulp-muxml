# gulp-muxml [![Build Status Travis](https://travis-ci.org/t1st3/gulp-muxml.svg?branch=master)](https://travis-ci.org/t1st3/gulp-muxml) [![Coverage Status](https://coveralls.io/repos/github/t1st3/gulp-muxml/badge.svg?branch=master)](https://coveralls.io/github/t1st3/gulp-muxml?branch=master)

> An XML parsing and formatting plugin for gulp

Thin wrapper around [`muxml`](https://github.com/t1st3/muxml) to make it a `gulp` plugin.


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


## Relevant

* [muxml](https://github.com/t1st3/muxml) | API for muxml
* [muxml-cli](https://github.com/t1st3/muxml-cli) | CLI for muxml


## License

MIT © [t1st3](http://tiste.org)
