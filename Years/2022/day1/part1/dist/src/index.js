"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFileToArray = void 0;
const fs = __importStar(require("fs"));
function readFileToArray(filePath) {
    filePath = 'input.txt';
    let data = fs.readFileSync(filePath, 'utf-8');
    let lines = data.split('\r\n');
    // console.log(lines)
    let totalArr = [];
    let total = 0;
    // loops through the array of lines from the text file
    for (let i = 0; i < lines.length; i++) {
        // if the current index does not equal NaN then push the value converted to an number to a new array
        if (lines[i] != "") {
            total = total + parseInt(lines[i]);
            // console.log(lines[i])
        }
        else {
            totalArr.push(total);
            total = 0;
            // console.log("if blank", i)
        }
        // console.log(total)
    }
    let largestValue = Math.max(...totalArr);
    totalArr.splice(totalArr.indexOf(largestValue), 1);
    console.log(largestValue);
    let secondLargest = Math.max(...totalArr);
    totalArr.splice(totalArr.indexOf(secondLargest), 1);
    console.log(secondLargest);
    let thirdLargest = Math.max(...totalArr);
    console.log(thirdLargest);
    // let result = 0
    // for(let counter = 0; counter < 3; counter++){
    //     result = result + Math.max(...totalArr)
    //         totalArr.splice(result,1)
    //         console.log(result)
    // }
    // for(let index = 0; index < 4; index++ ) {
    //     largestValue = Math.max(...totalArr)
    //         totalArr.splice(totalArr.indexOf(largestValue))
    //     secondLargest = Math.max(...totalArr)
    // totalArr.splice(totalArr.indexOf(secondLargest))
    // let thirdLargest = Math.max(...totalArr)
    // }
    return largestValue + secondLargest + thirdLargest;
}
exports.readFileToArray = readFileToArray;
// export function testFunction(filePath: string): number {
//     filePath = 'input2.txt';
//     const data = fs.readFileSync(filePath, 'utf-8');
//     const lines = data.split('\r\n');
//     console.log(lines)
//     return 56285
// }
