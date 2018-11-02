module.exports = {
  app: {
    port: process.env.PORT || 8000
  },
  db: {
    host: process.env.MONGODB_HOST,
    port: process.env.MONGODB_PORT,
    name: process.env.MONGODB_NAME
  }
};