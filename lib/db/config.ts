import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

console.log('process.env.DB_URL',process.env.DB_URL)

const pool = new Pool({
  connectionString: process.env.DB_URL,
});

export const db = drizzle(pool);