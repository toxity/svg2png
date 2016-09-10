"use strict";
const path = require("path");
const fileURL = require("file-url");

module.exports = tests => tests.map(test => {
    const normalized = Object.assign({}, test);
    normalized.options = Object.assign({}, test.options);

    const filename = path.resolve(__dirname, `inputs/${test.file}`);
    if (normalized.includeFilename) {
        normalized.options.filename = filename;
        delete normalized.includeFilename;
    }
    if (normalized.includeURL) {
        normalized.options.url = fileURL(filename);
        delete normalized.includeURL;
    }

    normalized.file = filename;

    return normalized;
});
