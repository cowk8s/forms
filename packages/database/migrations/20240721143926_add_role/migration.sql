-- CreateEnum
CREATE TYPE "Role" AS ENUM ('project_manager', 'engineer', 'founder', 'marketing_specialist', 'other');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role";
