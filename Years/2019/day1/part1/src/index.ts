import * as fs from "fs";

export function RocketEquation(inputFile: string): number {
  inputFile = "input.txt";
  let data = fs.readFileSync(inputFile, "utf-8");
  let lines = data.split("\r\n").toString();
  let result = 0
  let line = 0
  for(let i = 0; i < lines.length; i++){
    let line = parseInt(lines[i])
    console.log(line)
        result = result + (line / 2)
  }
  console.log(result);

  return result;
}
