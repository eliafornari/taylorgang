module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
              files: {
                'stylesheet/app.css' : 'main.scss'
              }
            }
          },
        concat: {

            js: {
                src: [
                     'bower_components/modernizer/modernizr.js',
                     'bower_components/soundcloud.min.js',
                     'components/eliasInstagramModule.js',
                     'bower_components/angular-mailchimp.js',
                     'https://connect.soundcloud.com/sdk/sdk-3.0.0.js',
                     'http://widget.bandsintown.com/javascripts/bit_widget.js',
                      'js/app.js',
                      'routes.js',
                      'services.js',
                      'components/*.js',
                      'home/home.js',
                      'artist/artist.js',
                      'producer/producer.js',
                      'subscribe/subscribe.js',
                      'about/about.js',
                      'tour/tour.js',
                      'contact/contact.js'
                    ],
                dest: 'js/concat.js'
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
                    'bower_components/angular/angular.min.js',
                     'bower_components/modernizer/modernizr.js',

                     'bower_components/jquery/jquery.js',
                     'bower_components/angular-touch/angular-touch.min.js',
                     'bower_components/angular-sanitize/angular-sanitize.min.js',
                     'bower_components/angular-route/angular-route.min.js',
                     'bower_components/angular-resource/angular-resource.min.js',
                     'bower_components/angular-animate/angular-animate.min.js',
                     'bower_components/angular-touch/angular-touch.js',
                     'bower_components/video.js/dist/video-js/video.dev.js',
                     'bower_components/soundcloud.min.js',
                     'components/*.js',
                     'bower_components/angular-mailchimp.js',
                     'https://connect.soundcloud.com/sdk/sdk-3.0.0.js',
                     'http://widget.bandsintown.com/javascripts/bit_widget.js',



                      'js/app.js',
                      'routes.js',
                      'services.js',
                      'components/**/*.js',
                      'home/home.js',
                      'artist/artist.js',
                      'producer/producer.js',
                      'subscribe/subscribe.js',
                      'about/about.js',
                      'tour/tour.js',
                      'contact/contact.js'

                  ],
                  // tasks: ['concat', 'uglify']
                tasks: ['concat']
              },
              css: {
                files: '**/*.scss',
                tasks: ['sass']
              }
        }


    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['watch']);
// 'concat:js',


        // grunt.registerTask('default', ['concat:js', 'uglify:js']);
};
// , 'compress:js'
