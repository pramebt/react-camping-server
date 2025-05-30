/*
  Warnings:

  - Made the column `public_id` on table `landmark` required. This step will fail if there are existing NULL values in that column.
  - Made the column `secure_url` on table `landmark` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `landmark` MODIFY `description` VARCHAR(1000) NOT NULL,
    MODIFY `public_id` VARCHAR(191) NOT NULL,
    MODIFY `secure_url` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Booking` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `totalNights` INTEGER NOT NULL,
    `checkIn` DATETIME(3) NOT NULL,
    `checkOut` DATETIME(3) NOT NULL,
    `total` INTEGER NOT NULL,
    `paymentStatus` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `profileId` VARCHAR(191) NULL,
    `landmarkId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `Profile`(`clerkId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_landmarkId_fkey` FOREIGN KEY (`landmarkId`) REFERENCES `Landmark`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
