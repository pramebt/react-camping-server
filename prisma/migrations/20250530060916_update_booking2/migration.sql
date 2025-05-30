/*
  Warnings:

  - Made the column `profileId` on table `booking` required. This step will fail if there are existing NULL values in that column.
  - Made the column `landmarkId` on table `booking` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `booking` DROP FOREIGN KEY `Booking_landmarkId_fkey`;

-- DropForeignKey
ALTER TABLE `booking` DROP FOREIGN KEY `Booking_profileId_fkey`;

-- DropIndex
DROP INDEX `Booking_landmarkId_fkey` ON `booking`;

-- DropIndex
DROP INDEX `Booking_profileId_fkey` ON `booking`;

-- AlterTable
ALTER TABLE `booking` MODIFY `profileId` VARCHAR(191) NOT NULL,
    MODIFY `landmarkId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `Profile`(`clerkId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_landmarkId_fkey` FOREIGN KEY (`landmarkId`) REFERENCES `Landmark`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
