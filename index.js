'use strict';

const concatStream = require('concat-stream');
const muxml = require('muxml');
const intoStream = require('into-stream');
const through = require('through2');

const self = {
	opts: {}
};

const transfromStream = function (file, enc, cb) {
	if (file.isNull()) {
		return cb(null, file);
	}

	if (file.isBuffer()) {
		const stream = intoStream(file.contents).pipe(muxml(self.opts));
		stream.pipe(concatStream(data => {
			file.contents = data;
			cb(null, file);
		}));
		return;
	}

	if (file.isStream()) {
		file.contents = file.contents.pipe(muxml(self.opts));
		return cb(null, file);
	}
};

const endStream = function (cb) {
	cb();
};

module.exports = function (opts) {
	self.opts = opts;
	return through.obj(transfromStream, endStream);
};
