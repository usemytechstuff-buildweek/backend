const sharedConfig = {
  client: "sqlite3",
  useNullAsDefault: true,
  migrations: { directory: "./data/migrations" },
  seeds: { directory: "./data/seeds" },
}

module.exports = {

  development: {
    ...sharedConfig,
    connection: {
      filename: './data/use-my-tech-stuff.db3'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      }
    }
  },

  testing: {
    ...sharedConfig,
    connection: {
      filename: './data/test.db3',
    },
  },

  staging: {
   
  },

  production: {
   
  }

};
