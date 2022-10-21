module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: "https://main.d3c0xiwj0ar5bz.amplifyapp.com/admin",
  app: {
    keys: env.array("APP_KEYS"),
  },
});
