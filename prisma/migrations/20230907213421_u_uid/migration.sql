/*
  Warnings:

  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `categoria` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `descripcion` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `precio` on the `Product` table. All the data in the column will be lost.
  - Added the required column `category` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Product` DROP PRIMARY KEY,
    DROP COLUMN `categoria`,
    DROP COLUMN `descripcion`,
    DROP COLUMN `precio`,
    ADD COLUMN `category` VARCHAR(55) NOT NULL,
    ADD COLUMN `description` VARCHAR(255) NOT NULL,
    ADD COLUMN `price` INTEGER NOT NULL,
    ADD COLUMN `quantity` INTEGER NOT NULL,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);
