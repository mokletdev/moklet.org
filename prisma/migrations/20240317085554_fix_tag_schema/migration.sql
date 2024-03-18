/*
  Warnings:

  - The primary key for the `Tag` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `tag_id` on the `Tag` table. All the data in the column will be lost.
  - Added the required column `tagName` to the `Tag` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_PostToTag` DROP FOREIGN KEY `_PostToTag_B_fkey`;

-- AlterTable
ALTER TABLE `Tag` DROP PRIMARY KEY,
    DROP COLUMN `tag_id`,
    ADD COLUMN `tagName` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`tagName`);

-- AlterTable
ALTER TABLE `_PostToTag` MODIFY `B` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `_PostToTag` ADD CONSTRAINT `_PostToTag_B_fkey` FOREIGN KEY (`B`) REFERENCES `Tag`(`tagName`) ON DELETE CASCADE ON UPDATE CASCADE;
