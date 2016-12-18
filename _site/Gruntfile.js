'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),

  concat: {
    dist: {
      src: [
      'js/scripts/*.js'
      ],
      dest: 'js/production.min.js',
    }
  },

  uglify: {
    build: {
      src: 'js/production.min.js',
      dest: 'js/production.min.js'
    }
  },

  sass: {
    dist: {
      files: {
        'css/main.css' : 'css/scss/main.scss'
      }
    }
  },

  postcss: {
    options: {
      map: false,

      processors: [
        require('pixrem')(),
        require('autoprefixer')({browsers: 'last 2 versions'}),
        require('cssnano')()
      ]
    },
    dist: {
      files: {
        '_includes/css/main.css': ['css/main.css']
      }
    }
  },

  // come back to this!!
  imagemin: {
    dynamic: {
      files: [{
        expand: true,
        cwd: 'images/',
        src: ['*.{png,jpg,gif}'],
        dest: 'images'
      }]
    }
  },

  replace: {
    dist: {
      options: {
        patterns: [
          {
            // Get rid of @charset in css to amke amp-compliant
            match: /@charset "UTF-8";/g,
            replacement: ''
          }
        ]
      },
      files: [
        {
          '_includes/css/main.css': ['_includes/css/main.css']
        }
      ]
    }
  },

  watch: {
    assemble: {
      files: ['{_includes,_data,_pages,_posts,_layouts,css/scss,js, _config}/{,*/}*.{md,html,yml,scss,js}'],
      tasks: ['build']
    }
  }

});

grunt.registerTask('build', ['concat', 'uglify', 'sass', 'postcss', 'imagemin', 'replace', 'watch']);

};
