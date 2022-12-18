import "dotenv/config";
import { z } from "zod";
import { execaCommand } from "execa";
import { sqitchOSSpecificCommandLine } from "./shared/sqitch.mjs";

const { PGDB_NAME, PGDB_USER, PGDB_PASS, PGDB_HOST, PGDB_PORT } = z
  .object({
    PGDB_NAME: z.string(),
    PGDB_USER: z.string(),
    PGDB_PASS: z.string(),
    PGDB_HOST: z.string(),
    PGDB_PORT: z.coerce.number().min(1).max(65353),
    PGDB_SSL: z.coerce.boolean(),
  }).parse(process.env);

const setTargetDBCommandLine =
  `${sqitchOSSpecificCommandLine} config --user engine.pg.target 'db:pg://${PGDB_USER}:${PGDB_PASS}@${PGDB_HOST}:${
    PGDB_PORT.toString(10)
  }/${PGDB_NAME}'`;

await execaCommand(setTargetDBCommandLine, { stdio: "inherit" });
