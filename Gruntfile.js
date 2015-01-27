module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Use nodemon to run server in debug mode with an initial breakpoint
        nodemon: {
            dev: {
                script: 'app.js'
            }
        },
        karma: {
            unit:{
                configFile: 'karma.conf.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('serve', function(){
        return grunt.task.run(['nodemon']);
    });

    grunt.registerTask('test', function(){
        return grunt.task.run(['karma']);
    });
};