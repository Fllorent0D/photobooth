module.exports = {
  name: 'photo-booth',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/photo-booth',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
