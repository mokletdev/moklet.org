/*
  Warnings:

  - You are about to drop the column `stage` on the `Post` table. All the data in the column will be lost.
  - The primary key for the `Tag` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `tagName` on the `Tag` table. All the data in the column will be lost.
  - You are about to alter the column `B` on the `_PostToTag` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Added the required column `tag_id` to the `Tag` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `User_Auth` DROP FOREIGN KEY `User_Auth_userEmail_fkey`;

-- DropForeignKey
ALTER TABLE `_PostToTag` DROP FOREIGN KEY `_PostToTag_B_fkey`;

-- AlterTable
ALTER TABLE `Post` DROP COLUMN `stage`,
    ADD COLUMN `deleted` DATETIME(3) NULL,
    ADD COLUMN `published` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `Tag` DROP PRIMARY KEY,
    DROP COLUMN `tagName`,
    ADD COLUMN `tag_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`tag_id`);

-- AlterTable
ALTER TABLE `User` MODIFY `role` ENUM('SuperAdmin', 'Admin', 'OSIS', 'MPK', 'BDI', 'PALWAGA', 'PASKATEMA', 'TSBC', 'TSFC', 'TSVC', 'TSCC', 'PMR', 'MEMO', 'MAC', 'METIC', 'COMET', 'Guest') NOT NULL DEFAULT 'Guest';

-- AlterTable
ALTER TABLE `User_Auth` ADD COLUMN `last_login` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `_PostToTag` MODIFY `B` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Aspiration_Form` (
    `aspiration_form_id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `is_open` BOOLEAN NOT NULL DEFAULT true,
    `open_at` DATETIME(3) NULL,
    `close_at` DATETIME(3) NULL,

    PRIMARY KEY (`aspiration_form_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Field` (
    `field_id` INTEGER NOT NULL AUTO_INCREMENT,
    `label` VARCHAR(191) NOT NULL,
    `type` ENUM('text', 'longtext', 'radio', 'checkbox') NOT NULL,
    `required` BOOLEAN NOT NULL DEFAULT false,
    `form_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`field_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Field_Option` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `value` VARCHAR(191) NOT NULL,
    `field_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Submission` (
    `submission_id` VARCHAR(191) NOT NULL,
    `form_id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `data` JSON NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`submission_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Submission_Field` (
    `id` VARCHAR(191) NOT NULL,
    `submission_id` VARCHAR(191) NOT NULL,
    `field_id` INTEGER NOT NULL,
    `value` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User_Auth` ADD CONSTRAINT `User_Auth_userEmail_fkey` FOREIGN KEY (`userEmail`) REFERENCES `User`(`email`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Aspiration_Form` ADD CONSTRAINT `Aspiration_Form_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Field` ADD CONSTRAINT `Field_form_id_fkey` FOREIGN KEY (`form_id`) REFERENCES `Aspiration_Form`(`aspiration_form_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Field_Option` ADD CONSTRAINT `Field_Option_field_id_fkey` FOREIGN KEY (`field_id`) REFERENCES `Field`(`field_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Submission` ADD CONSTRAINT `Submission_form_id_fkey` FOREIGN KEY (`form_id`) REFERENCES `Aspiration_Form`(`aspiration_form_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Submission` ADD CONSTRAINT `Submission_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Submission_Field` ADD CONSTRAINT `Submission_Field_submission_id_fkey` FOREIGN KEY (`submission_id`) REFERENCES `Submission`(`submission_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Submission_Field` ADD CONSTRAINT `Submission_Field_field_id_fkey` FOREIGN KEY (`field_id`) REFERENCES `Field`(`field_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PostToTag` ADD CONSTRAINT `_PostToTag_B_fkey` FOREIGN KEY (`B`) REFERENCES `Tag`(`tag_id`) ON DELETE CASCADE ON UPDATE CASCADE;
