import { sql } from "slonik";
import { z } from "zod";
import { pool } from "./slonik.js";

const emptyQuerySchema = z.object({}).strict();

const userSchema = z.object({
  nickname: z.string(),
  password: z.string(),
});

const result = await pool.connect(async (connection) => {
  const nickname = "klementine";
  const password = "orange";
  await connection.query(sql.type(emptyQuerySchema)`
      DELETE
      FROM main_schema.users
      WHERE nickname = '${nickname}'
  `);
  await connection.query(sql.type(emptyQuerySchema)`
      INSERT INTO main_schema.users (nickname, password)
      VALUES ('${nickname}', '${password}')
  `);
  return connection.one(
    sql
      .type(userSchema)`SELECT nickname, password
                        FROM main_schema.users
                        WHERE nickname = '${nickname}'`,
  );
});

console.log(result);

await pool.end();
