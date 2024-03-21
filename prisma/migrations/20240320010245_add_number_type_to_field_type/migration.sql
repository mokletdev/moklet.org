/*
  Warnings:

  - The primary key for the `Submission_Field` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `submission_field_id` on the `Submission_Field` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Char(36)`.

*/
-- AlterTable
ALTER TABLE `Field` MODIFY `type` ENUM('text', 'number', 'longtext', 'radio', 'checkbox') NOT NULL;

-- AlterTable
ALTER TABLE `Submission_Field` DROP PRIMARY KEY,
    MODIFY `submission_field_id` CHAR(36) NOT NULL,
    ADD PRIMARY KEY (`submission_field_id`);
