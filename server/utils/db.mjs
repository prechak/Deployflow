import { configDotenv } from "dotenv";

configDotenv();

import pkg from "pg";
const { Client } = pkg;
const { MY_USER, MY_PASSWORD, MY_HOSTNAME, MY_PORT, MY_DB } = process.env;

const client = new Client({
  connectionString: `postgresql://${MY_USER}:${MY_PASSWORD}@${MY_HOSTNAME}:${MY_PORT}/${MY_DB}`,
});

export default client;
