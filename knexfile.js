// Update with your config settings.
require("dotenv").config();

module.exports = {
  development: {
    client: "postgresql",
    useNullAsDefault: true,
    connection: {
      database: "child-nutrition",
      user: "postgres",
      password: process.env.PASSWORD,
    },
    pool: {
      min: 0,
      max: 20,
    },
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },
  production: {
    client: "pg",
    connection: "postgres://sbldgolh:2Hd_xxJ35QLsi_GeT_0tjx7q_SUoc4iQ@otto.db.elephantsql.com/sbldgolh",
    migrations: {
      directory: "./database/migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./database/seeds",
      tableName: "knex_seeds",
    },
  },
};
