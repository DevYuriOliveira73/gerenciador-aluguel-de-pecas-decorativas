import {prisma} from "../../database/prisma";
import { RequestPecaDTO } from "./peca.dto";

export async function createPeca(data: RequestPecaDTO): Promise<any> {

  const new_peca = await prisma.peca.create({
    data: {
      nome: data.nome,
      descricao: data.descricao,
      quantidade: data.quantidade,
      categoria_id: data.categoria_id,

      imagem: data.imagem ?? null
    }
  })

  return new_peca;
}


export async function jaExiste(nome : string, descricao: string): Promise<any> {
  const peca = await prisma.peca.findUnique({
    where: {
      nome_descricao: {
        nome: nome,
        descricao: descricao
      }
    }
  })

  return peca
}

export async function getAllPeca(): Promise<any> {
  const pecas = await prisma.peca.findMany()

  return pecas
}
