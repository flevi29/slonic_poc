import { sql } from "slonik";
import { z } from "zod";
import { pool } from "./slonik.js";

const user = z.object({
  nickname: z.string(),
  password: z.string(),
});

const result = await pool.connect(async (connection) => {
  await connection.query(sql.unsafe`
      DELETE
      FROM main_schema.users
      WHERE nickname = 'Dave Chapelle'
  `);
  await connection.query(sql.unsafe`
      INSERT INTO main_schema.users (nickname, password)
      VALUES ('Dave Chapelle', 'cock')
  `);
  return connection.one(
    sql
      .type(user)`SELECT nickname, password
                  FROM main_schema.users
                  WHERE nickname = 'Dave Chapelle'`,
  );
});

console.log(result);

await pool.end();
