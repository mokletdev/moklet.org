-- DropForeignKey
ALTER TABLE `Field` DROP FOREIGN KEY `Field_form_id_fkey`;

-- DropForeignKey
ALTER TABLE `Field_Option` DROP FOREIGN KEY `Field_Option_field_id_fkey`;

-- DropForeignKey
ALTER TABLE `Form` DROP FOREIGN KEY `Form_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `Submission` DROP FOREIGN KEY `Submission_form_id_fkey`;

-- DropForeignKey
ALTER TABLE `Submission_Field` DROP FOREIGN KEY `Submission_Field_field_id_fkey`;

-- DropForeignKey
ALTER TABLE `Submission_Field` DROP FOREIGN KEY `Submission_Field_submission_id_fkey`;

-- AddForeignKey
ALTER TABLE `Form` ADD CONSTRAINT `Form_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Field` ADD CONSTRAINT `Field_form_id_fkey` FOREIGN KEY (`form_id`) REFERENCES `Form`(`form_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Field_Option` ADD CONSTRAINT `Field_Option_field_id_fkey` FOREIGN KEY (`field_id`) REFERENCES `Field`(`field_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Submission` ADD CONSTRAINT `Submission_form_id_fkey` FOREIGN KEY (`form_id`) REFERENCES `Form`(`form_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Submission_Field` ADD CONSTRAINT `Submission_Field_submission_id_fkey` FOREIGN KEY (`submission_id`) REFERENCES `Submission`(`submission_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Submission_Field` ADD CONSTRAINT `Submission_Field_field_id_fkey` FOREIGN KEY (`field_id`) REFERENCES `Field`(`field_id`) ON DELETE CASCADE ON UPDATE CASCADE;
