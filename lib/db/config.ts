import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DB_URL || "postgresql://postgres:postgres@localhost:5432/kanban",
});

export const db = drizzle(pool); 