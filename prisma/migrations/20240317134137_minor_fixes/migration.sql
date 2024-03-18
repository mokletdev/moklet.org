/*
  Warnings:

  - The primary key for the `Field_Option` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Field_Option` table. All the data in the column will be lost.
  - The primary key for the `Submission_Field` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Submission_Field` table. All the data in the column will be lost.
  - Added the required column `field_option_id` to the `Field_Option` table without a default value. This is not possible if the table is not empty.
  - The required column `submission_field_id` was added to the `Submission_Field` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE `Field_Option` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `field_option_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`field_option_id`);

-- AlterTable
ALTER TABLE `Submission_Field` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `submission_field_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`submission_field_id`);
