const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env(
        "DATABASE_HOST",
        "cdsa365prod.cyruwrqmtrzm.ap-south-1.rds.amazonaws.com"
      ),
      port: env("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "CDSA365PROD"),
      user: env("DATABASE_USERNAME", "cdsaadmin"),
      password: env("DATABASE_PASSWORD", "S6A+!dYt"),
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
      },
    },
    options: {
      ssl: env.bool("DATABASE_SSL", false),
    },
    useNullAsDefault: true,
  },
});
