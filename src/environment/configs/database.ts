export const databaseConfig = () => {
  return {
    databases: {
      dialect: "mysql",
      host: process.env.DATABASE_HOST,
      username: process.env.USERNAMEDB,
      password: process.env.PASSWORD,
      database: process.env.DATABASE_NAME,
      port: !!process.env.DATABASE_PORT ? parseFloat(process.env.DATABASE_PORT) : 3306,
    },
  };
};
