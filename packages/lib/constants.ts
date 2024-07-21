import "server-only";
import { env } from "./env";


// Rate Limiting
export const SIGNUP_RATE_LIMIT = {
  interval: 60 * 60, // 60 minutes
  allowedPerInterval: 30,
};
export const LOGIN_RATE_LIMIT = {
  interval: 15 * 60, // 15 minutes
  allowedPerInterval: 30,
};
export const CLIENT_SIDE_API_RATE_LIMIT = {
  interval: 5 * 60, // 5 minutes
  allowedPerInterval: 200,
};
export const SHARE_RATE_LIMIT = {
  interval: 60 * 60, // 60 minutes
  allowedPerInterval: 30,
};

export const SYNC_USER_IDENTIFICATION_RATE_LIMIT = {
  interval: 60, // 1 minute
  allowedPerInterval: 5,
};

export const GOOGLE_CLIENT_ID = env.GOOGLE_CLIENT_ID;
export const GOOGLE_CLIENT_SECRET = env.GOOGLE_CLIENT_SECRET;

export const EMAIL_AUTH_ENABLED = env.EMAIL_AUTH_DISABLED !== "1";


export const GOOGLE_SHEETS_CLIENT_ID = env.GOOGLE_SHEETS_CLIENT_ID;
export const GOOGLE_SHEETS_CLIENT_SECRET = env.GOOGLE_SHEETS_CLIENT_SECRET;
export const GOOGLE_SHEETS_REDIRECT_URL = env.GOOGLE_SHEETS_REDIRECT_URL;

export const REDIS_HTTP_URL = env.REDIS_HTTP_URL;