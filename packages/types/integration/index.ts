import { z } from "zod";
import { ZIntegrationGoogleSheetsConfig, ZIntegrationGoogleSheetsInput } from "./google-sheet";
import { ZIntegrationSlackConfig, ZIntegrationSlackInput } from "./slack";

export const ZIntegrationType = z.enum(["googleSheets", "slack"]);
export type TIntegrationType = z.infer<typeof ZIntegrationType>;

export const ZIntegrationConfig = z.union([
  ZIntegrationGoogleSheetsConfig,
  ZIntegrationSlackConfig,
]);

export type TIntegrationConfig = z.infer<typeof ZIntegrationConfig>;

export const ZIntegrationBase = z.object({
  id: z.string(),
  environmentId: z.string(),
});

export const ZIntegration = ZIntegrationBase.extend({
  type: ZIntegrationType,
  config: ZIntegrationConfig,
});

export type TIntegration = z.infer<typeof ZIntegration>;

export const ZIntegrationBaseSurveyData = z.object({
  createdAt: z.date(),
  questionIds: z.array(z.string()),
  questions: z.string(),
  surveyId: z.string(),
  surveyName: z.string(),
});

export const ZIntegrationInput = z.union([
  ZIntegrationGoogleSheetsInput,
  ZIntegrationSlackInput,
]);
export type TIntegrationInput = z.infer<typeof ZIntegrationInput>;

export const ZIntegrationItem = z.object({
  name: z.string(),
  id: z.string(),
});
export type TIntegrationItem = z.infer<typeof ZIntegrationItem>;
