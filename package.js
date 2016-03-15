Package.describe({
  name: 'tmeasday:dirname-test',
  version: '0.0.1',
  summary: 'Testing __dirname from node',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/tmeasday/meteor-dirname-test.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'dirname-test': '1.0.0',
});

Package.onUse(function(api) {
  api.versionsFrom('1.3-rc.1');
  api.use('ecmascript');
  api.mainModule('dirname-test.js');
});