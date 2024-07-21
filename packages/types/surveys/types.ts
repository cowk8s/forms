import { z } from "zod";

export const ZI18nString = z.record(z.string()).refine((obj) => "default" in obj, {
  message: "Object must have a 'default' key",
});

export enum TSurveyQuestionTypeEnum {
  FileUpload = "fileUpload",
  OpenText = "openText",
  MultipleChoiceSingle = "multipleChoiceSingle",
  MultipleChoiceMulti = "multipleChoiceMulti",
  NPS = "nps",
  CTA = "cta",
  Rating = "rating",
  Consent = "consent",
  PictureSelection = "pictureSelection",
  Cal = "cal",
  Date = "date",
  Matrix = "matrix",
  Address = "address",
}


export const ZSurveyLogicBase = z.object({
  condition: z.string(),
  value: z.union([z.string(), z.array(z.string())]).optional(),
  destination: z.union([z.string(), z.literal("end")]).optional(),
});

export const ZSurveyOpenTextLogic = ZSurveyLogicBase.extend({
  condition: z.enum(["submitted", "skipped"]).optional(),
  value: z.undefined(),
});

export const ZSurveyFileUploadLogic = ZSurveyLogicBase.extend({
  condition: z.enum(["uploaded", "notUploaded"]).optional(),
  value: z.undefined(),
});

export const ZSurveyLogic = z.union([
  ZSurveyOpenTextLogic,
  ZSurveyFileUploadLogic
]);

export type TSurveyLogic = z.infer<typeof ZSurveyLogic>;

export const ZSurveyQuestionBase = z.object({
  id: z.string(),
  type: z.string(),
  imageUrl: z.string().optional(),
  logic: z.array(ZSurveyLogic).optional()
});

export const ZSurveyOpenTextQuestionInputType = z.enum(["text", "email", "url", "number", "phone"]);

export const ZSurveyOpenTextQuestion = ZSurveyQuestionBase.extend({
  type: z.literal(TSurveyQuestionTypeEnum.OpenText),
  placeholder: ZI18nString.optional(),
  longAnswer: z.boolean().optional(),
  logic: z.array(ZSurveyOpenTextLogic).optional(),
  inputType: ZSurveyOpenTextQuestionInputType.optional().default("text"),
});

export type TSurveyOpenTextQuestion = z.infer<typeof ZSurveyOpenTextQuestion>;

export const ZSurveyConsentQuestion = ZSurveyQuestionBase.extend({
  type: z.literal(TSurveyQuestionTypeEnum.Consent)
});

export const ZSurveyQuestion = z.union([
  ZSurveyOpenTextQuestion,
  ZSurveyConsentQuestion
]);

export const ZSurveyQuestions = z.array(ZSurveyQuestion);

export const ZSurvey = z
  .object({
    id: z.string().cuid2(),
    createdAt: z.date(),
    questions: ZSurveyQuestions.min(1, {
      message: "Survey must have at least one question",
    })
  });

  export type TSurvey = z.infer<typeof ZSurvey>;  