module.exports = {
    coverageDirectory: 'coverage',
    coverageThreshold:{
        global: {
            statements: 5,
            branchs: 25,
            functions: 80,
            lines: 5,
        },
        testPathIgnorePatterns : ['/node_modules'],
        coverageProvider: 'v8',
        testEnvironment: 'node',
        testTimeout: 10000,
        collectCoverageFrom: [
            '**/src/app/controllers/*.js',
            '**/src/app/modles/*.js',
            '**/src/app/services/*.js',
            '**/test/**/*.js',

        ],
    }
}