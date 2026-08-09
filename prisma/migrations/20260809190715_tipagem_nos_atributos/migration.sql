/*
  Warnings:

  - You are about to alter the column `email` on the `Cliente` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(64)`.
  - You are about to alter the column `telefone` on the `Cliente` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Char(11)`.
  - You are about to alter the column `cpf` on the `Cliente` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Char(11)`.

*/
-- AlterTable
ALTER TABLE "Cliente" ALTER COLUMN "email" SET DATA TYPE VARCHAR(64),
ALTER COLUMN "telefone" SET DATA TYPE CHAR(11),
ALTER COLUMN "cpf" SET DATA TYPE CHAR(11);
