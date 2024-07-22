-- CreateEnum
CREATE TYPE "IdentityProvider" AS ENUM ('email', 'github', 'google', 'azuread', 'openid');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "identityProvider" "IdentityProvider" NOT NULL DEFAULT 'email';
