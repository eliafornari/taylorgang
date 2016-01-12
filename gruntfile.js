module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // sass: {
        //   dist{
        //     files{
        //       'css/style.css': 'sass/style.scss'
        //
        //     }
        //   }
        // }
        concat: {

            js: {
                src: [
                    //  'bower_components/jquery/dist/jquery.js',
                    //  'bower_components/jquery-ui/jquery-ui.min.js',
                    //  'bower_components/video.js/dist/video.js',
                    'services.js',
                     'app.js',
                     'routes.js',

                     'nav/*.js',
                     'artist/*.js',
                     'taylor/*.js',
                     'contact/*.js',
                     'shop/*.js',
                     'splash/*.js'

                ],
                dest: 'concat.js'
            }
        },
        // uglify: {
        //   options: {
        //     report: 'min',
        //     mangle: false,
        //     compress: true
        //   },
        //   js: {
        //         files: {
        //             'app.min.js': ['concat.js']
        //         }
        //     }
        // },
        watch: {
                js: {
                  files: [
                    'services.js',
                    'app.js',
                    'routes.js',
                    'nav/*.js',
                    'artist/*.js',
                    'taylor/*.js',
                    'contact/*.js',
                    'shop/*.js',
                    'splash/*.js'
                   ],
                  // tasks: ['concat', 'uglify']
                tasks: ['concat']
                }
        }
        // compress: {
        //     dist: {
        //       options: {
        //         archive: 'dist/<%= pkg.name %>-<%= pkg.version %>.zip'
        //       },
        //       files: [{
        //         src: [ 'index.html' ],
        //         dest: '/'
        //       }, {
        //         src: [ 'js/**' ],
        //         dest: 'js/'
        //       }, {
        //         src: [ 'data/**' ],
        //         dest: 'data/'
        //       }, {
        //         src: [ 'app.min.js' ],
        //         dest: '/'
        //       }]
        //     }
        //   }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['concat:js']);

        // grunt.registerTask('default', ['concat:js', 'uglify:js']);
};
// , 'compress:js'
