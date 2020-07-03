import path from 'path';

module.exports = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite'),
    },
    pool: {
        min: 0,
        max: 50,
        createTimeoutMillis: 3000,
        acquireTimeoutMillis: 30000,
        idleTimeoutMillis: 30000,
        reapIntervalMillis: 1000,
        createRetryIntervalMillis: 100,
        propagateCreateError: false // <- default is true, set to false
    },
     migrations: {
        directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
        directory: `${__dirname}/src/database/seeds`
    },
    useNullAsDefault: true,
}

