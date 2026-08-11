
import * as pecaRepository  from './peca.repository'
import { RequestPecaDTO } from './peca.dto'
import * as categoriaRepository from '../categoria/categoria.repository'
import { idType } from '../../types/IdType'
import { error } from 'node:console'

export async function createPecaService(data: RequestPecaDTO): Promise<any> {
  const isPecaExists = await pecaRepository.jaExiste(data.nome, data.descricao)
  const categoriaExists = await categoriaRepository.getIdCategoria(data.categoria_id)

  if (data.quantidade < 0) {
    throw new Error("Eh necessario que quantidade > 0")
  }

  if (isPecaExists) {
    console.error('Nao ta batendo?')
    throw new Error("Já existe uma peça com esse nome e descrição");
  }

  if (!categoriaExists) {
    throw new Error("Categoria nao existe na base de dados.")
  }

  const dadosNormalizador = {
    ...data,
    nome: data.nome.trim(),
    descricao: data.descricao.trim(),
  }

  const peca = await pecaRepository.createPeca(dadosNormalizador)

  return peca;
}


export async function getAllPecaService() {
  const getAllCategoria = await pecaRepository.getAllPeca()


  return getAllCategoria
}

export async function desativarPeca(id : idType) {
  const peca = await pecaRepository.getOnlyPeca(id)

  if (!peca) {
    throw new Error('Peca nao encontrada')
  }

  if (peca.deletedAt !== null) {
    throw new Error(`A peca ja esta inativa desde ${peca.deletedAt}`)
  }

  const pecaDesativada = await pecaRepository.desativarPeca(id)

  return pecaDesativada

}
