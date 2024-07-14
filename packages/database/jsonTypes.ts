
export {};

declare global {
  namespace PrismaJson {
    export type ActionProperties = { [key: string]: string };
  }
}