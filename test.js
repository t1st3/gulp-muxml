/* global describe,it */

'use strict';

var strictEqual = require('assert').strictEqual;
var fs = require('fs');
var concatStream = require('concat-stream');
var File = require('vinyl');
var gulpMuxml = require('./');

describe('gulpMuxml', function () {
	it('pipes correctly when file.contents is a buffer', function (done) {
		var expected = '<a id="aa"><b><c>d</c></b></a>';
		var stream = gulpMuxml({pretty: false});
		stream.on('data', function (file) {
			strictEqual(file.contents.toString(), expected);
			done();
		});
		stream.write(new File({
			cwd: './',
			base: '/',
			path: '/fixture.xml',
			contents: fs.readFileSync('fixture.xml')
		}));
		stream.end();
	});

	it('pipes correctly when file.contents is a stream', function (done) {
		var expected = '<a id="aa"><b><c>d</c></b></a>';
		var stream = gulpMuxml({pretty: false});
		stream.on('data', function (file) {
			file.contents.pipe(concatStream(function (data) {
				strictEqual(data.toString(), expected);
				done();
			}));
		});
		stream.write(new File({
			cwd: '/',
			base: '/',
			path: '/fixture.xml',
			contents: fs.createReadStream('fixture.xml')
		}));
		stream.end();
	});

	it('pipes correctly when file.contents is null', function (done) {
		var stream = gulpMuxml({pretty: false});
		stream.on('data', function (file) {
			strictEqual(file.contents, null);
			done();
		});
		stream.write(new File({}));
		stream.end();
	});
});
