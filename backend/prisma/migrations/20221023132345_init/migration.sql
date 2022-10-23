/*
  Warnings:

  - You are about to drop the column `activityname` on the `Party` table. All the data in the column will be lost.
  - Added the required column `activityID` to the `Party` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Party" DROP CONSTRAINT "Party_activityname_fkey";

-- AlterTable
ALTER TABLE "Party" DROP COLUMN "activityname",
ADD COLUMN     "activityID" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Party" ADD CONSTRAINT "Party_activityID_fkey" FOREIGN KEY ("activityID") REFERENCES "Activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
