/*
  Warnings:

  - You are about to drop the `Aspiration_Form` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Aspiration_Form` DROP FOREIGN KEY `Aspiration_Form_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `Field` DROP FOREIGN KEY `Field_form_id_fkey`;

-- DropForeignKey
ALTER TABLE `Submission` DROP FOREIGN KEY `Submission_form_id_fkey`;

-- DropTable
DROP TABLE `Aspiration_Form`;

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
