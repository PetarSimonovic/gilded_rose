module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'src/GildedRose.js',
            'spec/GildedRoseSpec.js'
        ],
        preprocessors: {
            'src/GildedRose.js': ['coverage']
        },
        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-coverage',
            'karma-chrome-launcher',
            'karma-spec-reporter'
        ],
        reporters: ['progress', 'coverage', 'spec'],
        port: 9878,
        colors: true,
        logLevel: config.LOG_DEBUG,
        autowatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity,
        coverageReporter: {
            includeAllSources: true,
            dir: 'coverage/',
            reporters: [
                { type: "html", subdir: "html" },
                { type: 'text-summary' }
            ]
        }
    });
}
