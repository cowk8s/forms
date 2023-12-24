export type Result<T, E = Error> = { ok: true; data: T } | { ok: false; error: E };

export const ok = <T, E>(data: T): Result<T, E> => ({ ok: true, data });

export const err = <E = Error>(error: E): Result<never, E> => ({
  ok: false,
  error,
});

/**
 * Wraps a function `fn` that may throw an error into a new function that returns a `Result` object.
 * If the wrapped function throws an error, the returned `Result` object will have an `ok` property of `false`
 * and an `error` property containing the thrown error. Otherwise, the returned `Result` object will have an
 * `ok` property of `true` and a `data` property containing the result of the wrapped function.
 *
 * @template T The type of the result value.
 * @template A An array of the types of the arguments expected by the wrapped function.
 *
 * @param {(...args: A) => T} fn The function to wrap.
 * @returns {(...args: A) => Result<T>} A new function that returns a `Result` object.
 *
 * @example
 * function divideByTwo(num: number): number {
 *   if (num === 0) {
 *     throw new Error("Cannot divide zero");
 *   }
 *   return num / 2;
 * }
 *
 * const wrappedDivideByTwo = wrapThrows(divideByTwo);
 *
 * const result1: Result<number> = wrappedDivideByTwo(10); // { ok: true, data: 5 }
 * const result2: Result<number> = wrappedDivideByTwo(0); // { ok: false, error: Error("Cannot divide zero") }
 */
export const wrapThrows =
  <T, A extends any[]>(fn: (...args: A) => T): ((...args: A) => Result<T>) =>
  (...args: A): Result<T> => {
    try {
      return {
        ok: true,
        data: fn(...args),
      };
    } catch (error: any) {
      return {
        ok: false,
        error,
      };
    }
  };
  