/*
  Warnings:

  - The primary key for the `field_option` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `field_option` table. All the data in the column will be lost.
  - The primary key for the `submission_field` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `submission_field` table. All the data in the column will be lost.
  - You are about to drop the `aspiration_form` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `field_option_id` to the `Field_Option` table without a default value. This is not possible if the table is not empty.
  - Added the required column `published_at` to the `Post` table without a default value. This is not possible if the table is not empty.
  - The required column `submission_field_id` was added to the `Submission_Field` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE `aspiration_form` DROP FOREIGN KEY `Aspiration_Form_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `field` DROP FOREIGN KEY `Field_form_id_fkey`;

-- DropForeignKey
ALTER TABLE `submission` DROP FOREIGN KEY `Submission_form_id_fkey`;

-- AlterTable
ALTER TABLE `field_option` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `field_option_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`field_option_id`);

-- AlterTable
ALTER TABLE `post` ADD COLUMN `published_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `submission_field` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `submission_field_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`submission_field_id`);

-- DropTable
DROP TABLE `aspiration_form`;

-- CreateTable
CREATE TABLE `Form` (
    `form_id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `allow_edit` BOOLEAN NOT NULL DEFAULT false,
    `submit_once` BOOLEAN NOT NULL DEFAULT true,
    `is_open` BOOLEAN NOT NULL DEFAULT true,
    `open_at` DATETIME(3) NULL,
    `close_at` DATETIME(3) NULL,

    PRIMARY KEY (`form_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Form` ADD CONSTRAINT `Form_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Field` ADD CONSTRAINT `Field_form_id_fkey` FOREIGN KEY (`form_id`) REFERENCES `Form`(`form_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Submission` ADD CONSTRAINT `Submission_form_id_fkey` FOREIGN KEY (`form_id`) REFERENCES `Form`(`form_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
