
export type ResultError<T> = { ok: false; error: T };

export type ResultOk<T> = { ok: true; value: T };

export type Result<T, E = Error> = ResultOk<T> | ResultError<E>;

export const ok = <T, E>(value: T): Result<T, E> => ({ ok: true, value });

export const okVoid = <E>(): Result<void, E> => ({ ok: true, value: undefined });

export const err = <E = Error>(error: E): ResultError<E> => ({
  ok: false,
  error,
});

export type NetworkError = {
  code: "network_error";
  status: number;
  message: string;
  url: string;
  responseMessage: string;
};