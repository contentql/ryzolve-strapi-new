module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  // url: "https://ryzolve-strapi-production-ca3d.up.railway.app/",
  app: {
    keys: env.array("APP_KEYS", ["key1", "key2"]),
  },
});
