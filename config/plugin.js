'use strict';

// had enabled by egg
// exports.static = true;
exports.nunjucks = {
    enable: true,
    package: 'egg-view-nunjucks'
};
exports.mysql = {
    enable: true,
    package: 'egg-mysql',
};
exports.passport = {
    enable: true,
    package: 'egg-passport',
};

exports.passportGithub = {
    enable: true,
    package: 'egg-passport-github',
};