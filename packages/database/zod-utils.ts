import z from "zod";

export const ZActionProperties = z.record(z.string());

export { ZIntegrationConfig } from "@cowk8s/types/integration";
