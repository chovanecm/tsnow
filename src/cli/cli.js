import {readLine, readPassword} from "./cli-io";

export async function username() {
  return await readLine("Username: ");
}

export async function password() {
  return await readPassword("Password: ");
}

/**
 *
 * @return {Promise<boolean>}
 */
export async function useCachedData() {
  return (await readLine("Cached data found on your computer. Use it? [Y/n] ")).toUpperCase() !== "N";
}
