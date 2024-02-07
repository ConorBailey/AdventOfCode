import * as fs from "fs";

export function RocketEquation(inputFile: string): number {
  inputFile = "input.txt";
  let data = fs.readFileSync(inputFile, "utf-8");
  let lines = data.split("\r\n");
  console.log(lines)
  let result = 0
  let line = 0
  for(let i = 0; i < lines.length; i++){
    line = parseInt(lines[i],10)
    console.log(line)
        result = (line / 3) + result
        result = Math.floor(result) - 2
  }
  console.log(result);

  return result;
}
