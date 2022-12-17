// @TODO: https://github.com/gajus/slonik#user-content-slonik-usage
import "dotenv/config";
import { z } from "zod";
import { createPool } from "slonik";

const { PGDB_NAME, PGDB_SCHEMA, PGDB_USER, PGDB_PASS, PGDB_HOST, PGDB_PORT } = z
  .object({
    PGDB_NAME: z.string(),
    PGDB_SCHEMA: z.string(),
    PGDB_USER: z.string(),
    PGDB_PASS: z.string(),
    PGDB_HOST: z.string(),
    PGDB_PORT: z.coerce.number().min(1).max(65353),
  }).parse(process.env);

export const pool = await createPool(
  `postgres://${PGDB_USER}:${PGDB_PASS}@${PGDB_HOST}:${
    PGDB_PORT.toString(10)
  }/${PGDB_NAME}?schema=${PGDB_SCHEMA}`,
);
