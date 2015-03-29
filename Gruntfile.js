module.exports = function(grunt) {

grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: [{
                    expand: true,
                    cwd: 'src/scss',
                    src: ['*.scss'],
                    dest: 'dest/css',
                    ext: '.css'
                }]
            }
        },
        htmlmin: {
	        dist: { 
	            options: { 
	                removeComments: true,
	                collapseWhitespace: true
	            },
	            files: { 
	                'dest/index.html': 'src/index.html',
	                'dest/coffee.html': 'src/coffee.html',
	                'dest/pastries.html': 'src/pastries.html',
	                'dest/location.html': 'src/location.html'
	            }
	        }
        },
        watch: {
        	files: ['src/**/*'],
        	tasks: ['default']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch'); grunt.loadNpmTasks('grunt-contrib-sass'); grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('default', ['sass','htmlmin']);


};