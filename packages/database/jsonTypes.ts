
import { TProductConfig } from "@cowk8s/types/product";

declare global {
  namespace PrismaJson {
    export type ActionProperties = { [key: string]: string };
    export type ProductConfig = TProductConfig;
  }
}