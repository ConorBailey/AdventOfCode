import * as fs from "fs";

export function sonarSweep(filePath: string): number {
  filePath = "input.txt";
  let data = fs.readFileSync(filePath, "utf-8");
  let lines = data.split("\r\n");

  let increased = 1;

  for (let i = 1; i < lines.length; i++) {
    if (lines[i] > lines[i - 1]) {
      increased++;
    }
  }
  console.log(increased);
  return 0;
}
