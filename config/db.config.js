module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "hello.787",
    DB: "todo",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };