-- CreateEnum
CREATE TYPE "Objective" AS ENUM ('increase_conversion', 'improve_user_retention', 'increase_user_adoption', 'sharpen_marketing_messaging', 'support_sales', 'other');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "objective" "Objective";
