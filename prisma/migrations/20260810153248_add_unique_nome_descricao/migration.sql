/*
  Warnings:

  - A unique constraint covering the columns `[nome,descricao]` on the table `Peca` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Peca_nome_descricao_key" ON "Peca"("nome", "descricao");
