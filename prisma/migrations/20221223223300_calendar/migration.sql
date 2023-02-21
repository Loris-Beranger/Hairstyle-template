-- CreateTable
CREATE TABLE `Calandar` (
    `id` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `specialistId` VARCHAR(191) NULL,
    `plage` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Calandar` ADD CONSTRAINT `Calandar_specialistId_fkey` FOREIGN KEY (`specialistId`) REFERENCES `Specialist`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
