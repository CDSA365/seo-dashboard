const path = require("path");
module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "FyEW88pWPdm1B6GEyL3ZBw=="),
    logo: path.join(__dirname, "./src/admin/extensions/cdsa-logo.jpeg"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", "P1cMAQY0ArL0GJ0u6J6ZJQ=="),
  },
});
