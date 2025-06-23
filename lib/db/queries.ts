import { db } from "./config";
import { columns, tasks } from "./schema";

export async function getColumns() {
  return await db.select().from(columns).orderBy(columns.order);
}

export async function getTasks() {
  return await db.select().from(tasks).orderBy(tasks.columnId);
}