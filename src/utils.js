/**
 * Wrap a function that expects
 * @param {object} thisArg
 * @param {function(...args, callback): void} func
 * @param {boolean} [onlyError = false] - If set to true, the result of the promissified function is checked. If it's null, it is assumed to be a success (resolve).
 * Otherwise, It is assumed to be a reject (error).
 * @example
 * // Standard way:
 * fs.writeFile("hello.txt", "world", callbackFunction)
 * // Use
 * const writeFile = promisify(fs, fs.writeFile);
 * const writePromise = writeFile("hello.txt", "world")
 * // and then either
 * await writePromise
 * // or
 * writePromise.then(callback)
 */
export const promisify = (thisArg, func, onlyError = false) => (...args) =>
  new Promise((resolve, reject) => {
    func.apply(thisArg, args.concat([result => onlyError && result ? reject(result) : resolve(result)]));
  });


export function logErrorIfNotNull(err) {
  if (err) {
    console.error(err);
  }
}

export function defaultCallback () {

}