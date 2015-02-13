


module.exports = function (grunt) {
  'use strict';
  grunt.registerTask('serve', function (target) {

    grunt.task.run([
      'connect:livereload',
      'watch'
    ]);
  });


  grunt.registerTask('default', [
    'serve'
  ]);
};
