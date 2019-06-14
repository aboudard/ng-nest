module.exports = {
  name: 'todos-todos',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/todos/todos',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
