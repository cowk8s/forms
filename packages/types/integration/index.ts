import { z } from "zod";

export const ZIntegrationType = z.enum(["googleSheets", "n8n", "airtable", "notion", "slack"]);