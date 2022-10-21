module.exports = ({ env }) => {
  return {
    host: env("HOST", "0.0.0.0"),
    port: env.int("PORT", 1337),
    app: {
      keys: env.array("APP_KEYS", [
        "QWT41rWWDnJyvA7/m+fgKQ==",
        "jwIxoIUN+0L5liafShl7Eg==",
        "rA9OfqjlNHDXFtfROPqlzA==",
        "4Na29WQn5qVpw9Z+XBOuJQ==",
      ]),
    },
  };
};
