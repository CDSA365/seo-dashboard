const path = require("path");
module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
    logo: path.join(__dirname, "./src/admin/extensions/cdsa-logo.jpeg"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
});
