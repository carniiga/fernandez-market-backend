/*
  Warnings:

  - You are about to drop the column `category` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Product` table. All the data in the column will be lost.
  - Added the required column `categoria` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descripcion` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `precio` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productName` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Product` DROP COLUMN `category`,
    DROP COLUMN `description`,
    DROP COLUMN `name`,
    DROP COLUMN `price`,
    ADD COLUMN `categoria` VARCHAR(55) NOT NULL,
    ADD COLUMN `descripcion` VARCHAR(255) NOT NULL,
    ADD COLUMN `precio` INTEGER NOT NULL,
    ADD COLUMN `productName` VARCHAR(55) NOT NULL;
