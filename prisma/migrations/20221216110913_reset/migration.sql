/*
  Warnings:

  - You are about to alter the column `gender` on the `Service` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `Service` MODIFY `gender` INTEGER NOT NULL;
