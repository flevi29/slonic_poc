const sqitchRaw = "sqitch";
let sqitch;
switch (process.platform) {
  case "linux":
    sqitch = sqitchRaw;
    break;
  case "win32":
    sqitch = "wsl -- sudo sqitch";
    break;
  default:
    throw new Error("Unsupported OS");
}

export { sqitch, sqitchRaw };
