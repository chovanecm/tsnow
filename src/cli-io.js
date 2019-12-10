import {promisify} from "./utils";

const Prompt = require("prompt-password");
const readline = require("readline");
const rl = getReadline();

export async function readPassword(question) {
  const prompt = new Prompt({
    type: "password",
    "message": question,
    "name": "password"
  });
  return prompt.run();
}
export const readLine = promisify(rl, rl.question);
//
export function closeIO() {
  rl.close();
}

function getReadline() {
  return readline.createInterface(
    {
      input: process.stdin,
      output: process.stdout
    }
  )
}
