-- AlterTable
ALTER TABLE `Form` MODIFY `description` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `Post` MODIFY `description` LONGTEXT NOT NULL;

-- AlterTable
ALTER TABLE `Submission_Field` MODIFY `value` LONGTEXT NOT NULL;
