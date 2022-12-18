const sqitch = "sqitch";
let sqitchOSSpecificCommandLine;
switch (process.platform) {
  case "linux":
    sqitchOSSpecificCommandLine = sqitch;
    break;
  case "win32":
    sqitchOSSpecificCommandLine = "wsl -- sudo sqitch";
    break;
  default:
    throw new Error("Unsupported OS");
}

export { sqitchOSSpecificCommandLine, sqitch };
