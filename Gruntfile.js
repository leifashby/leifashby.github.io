/* jshint ignore:start */
watch = require('gulp-watch');

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      dev: {
        options: {
          paths: ['less'],
          modifyVars: {
            assetsPath: '"../assets"'
          }
        },
        files: [{
          expand: true,
          cwd: 'less',
          src: ['style.less'],
          dest: 'assets/',
          ext: '.css'
        }]
      }
    },
    jshint: {
      files: ['src/**/*.js'],
      options: {
        jshintrc: true
      }
    },
    watch: {
      options: {
        files: ['<%= jshint.files %>', 'less/**/*.less'],
        tasks: ['jshint', 'less:dev']
      }
    },
    express: {
      dev: {
        options: {
          script: 'app.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-watch');
  grunt.loadNpmTasks('grunt-express-server');

  grunt.registerTask('default', ['jshint', 'less:dev']);

  grunt.registerTask('server', ['default', 'express', 'simple-watch']);
};
