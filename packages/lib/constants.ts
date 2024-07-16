import "server-only";
import { env } from "./env";


export const EMAIL_AUTH_ENABLED = env.EMAIL_AUTH_DISABLED !== "1";
