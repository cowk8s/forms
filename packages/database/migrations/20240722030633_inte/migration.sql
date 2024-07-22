/*
  Warnings:

  - Added the required column `type` to the `Environment` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "EnvironmentType" AS ENUM ('production', 'development');

-- CreateEnum
CREATE TYPE "IntegrationType" AS ENUM ('googleSheets', 'notion', 'airtable', 'slack');

-- AlterTable
ALTER TABLE "Environment" ADD COLUMN     "appSetupCompleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "type" "EnvironmentType" NOT NULL,
ADD COLUMN     "websiteSetupCompleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "widgetSetupCompleted" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "Integration" (
    "id" TEXT NOT NULL,
    "type" "IntegrationType" NOT NULL,
    "environmentId" TEXT NOT NULL,
    "config" JSONB NOT NULL,

    CONSTRAINT "Integration_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Integration_environmentId_idx" ON "Integration"("environmentId");

-- CreateIndex
CREATE UNIQUE INDEX "Integration_type_environmentId_key" ON "Integration"("type", "environmentId");

-- AddForeignKey
ALTER TABLE "Integration" ADD CONSTRAINT "Integration_environmentId_fkey" FOREIGN KEY ("environmentId") REFERENCES "Environment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
