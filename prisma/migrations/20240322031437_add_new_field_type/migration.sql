-- AlterTable
ALTER TABLE `Field` MODIFY `type` ENUM('text', 'number', 'email', 'password', 'longtext', 'radio', 'checkbox') NOT NULL;
