module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: '<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          '<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },

    karma: {
      options: {
        configFile: 'karma.conf.js'
      },
      /*unit: {
        runnerPort: 9101,
        background: true,
        port: 9877
      },*/
      continuous: {
        singleRun: true
      }
    },
    
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'tests/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          console: true,
          module: true,
          document: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-bump');

  grunt.registerTask('test', ['jshint', 'karma']);

  grunt.registerTask('default', ['jshint', 'karma:continuous', 'concat', 'uglify']);

};