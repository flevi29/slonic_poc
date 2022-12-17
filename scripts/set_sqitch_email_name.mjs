import { execaCommand } from "execa";
import { sqitch, sqitchRaw } from "./shared/sqitch.mjs";

if (process.argv.length !== 4) {
  throw new Error("expected 2 arguments");
}

const setNameCommandLine = `${sqitch} config --user user.name '${
  process.argv[2]
}'`;
const setEmailCommandLine = `${sqitchRaw} config --user user.email '${
  process.argv[3]
}'`;

await execaCommand(`${setNameCommandLine} && ${setEmailCommandLine}`, {
  stdio: "inherit",
});
