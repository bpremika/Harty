/*
  Warnings:

  - You are about to drop the column `is_private` on the `Party` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Party" DROP COLUMN "is_private",
ADD COLUMN     "is_public" BOOLEAN NOT NULL DEFAULT true;
