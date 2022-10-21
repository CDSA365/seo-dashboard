module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env(
        "DATABASE_HOST",
        "cdsa365-dev.cyruwrqmtrzm.ap-south-1.rds.amazonaws.com"
      ),
      port: env("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "CDSA365DEV"),
      user: env("DATABASE_USERNAME", "admin"),
      password: env("DATABASE_PASSWORD", "W3lcome!"),
    },
    useNullAsDefault: true,
  },
});
