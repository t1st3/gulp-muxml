'use strict';

var concatStream = require('concat-stream');
var muxml = require('muxml').default;
var intoStream = require('into-stream');
var through = require('through2');

var self = {
	opts: {}
};

var transfromStream = function (file, enc, cb) {
	if (file.isNull()) {
		return cb(null, file);
	}

	if (file.isBuffer()) {
		var stream = intoStream(file.contents).pipe(muxml(self.opts));
		stream.pipe(concatStream(function (data) {
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

var endStream = function (cb) {
	cb();
};

module.exports = function (opts) {
	self.opts = opts;
	return through.obj(transfromStream, endStream);
};
