// src/drizzle/db.ts (or wherever you define the DB)
import "dotenv/config";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./models/index"; // Adjust the import path to your schema file
const sql = neon(process.env.DATABASE_URL!);

export const db = drizzle(sql,{
  schema,
  logger: true,
});
