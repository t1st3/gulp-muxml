/* global describe,it */

'use strict';

const {strictEqual} = require('assert');
const fs = require('fs');
const concatStream = require('concat-stream');
const File = require('vinyl');
const gulpMuxml = require('.');

describe('gulpMuxml', () => {
	it('pipes correctly when file.contents is a buffer', done => {
		const expected = '<a id="aa"><b><c>d</c></b></a>';
		const stream = gulpMuxml({pretty: false});
		stream.on('data', file => {
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

	it('pipes correctly when file.contents is a stream', done => {
		const expected = '<a id="aa"><b><c>d</c></b></a>';
		const stream = gulpMuxml({pretty: false});
		stream.on('data', file => {
			file.contents.pipe(concatStream(data => {
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

	it('pipes correctly when file.contents is null', done => {
		const stream = gulpMuxml({pretty: false});
		stream.on('data', file => {
			strictEqual(file.contents, null);
			done();
		});
		stream.write(new File({}));
		stream.end();
	});
});
