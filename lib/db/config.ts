import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from './schema';

console.log('process.env.DB_URL',process.env.DB_URL)

const pool = new Pool({
  connectionString: process.env.DB_URL || "postgresql://postgres:postgres@localhost:5432/kanban",
});

export const db = drizzle(pool, { schema });