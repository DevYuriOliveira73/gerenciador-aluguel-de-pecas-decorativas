
import * as pecaRepository  from './peca.repository'
import { CreatePecaDTO, UpdatePecaDTO } from './peca.dto'
import * as categoriaRepository from '../categoria/categoria.repository'
import { idType } from '../../types/IdType'

export async function createPecaService(data: CreatePecaDTO): Promise<any> {
  const isPecaExists = await pecaRepository.jaExiste(data.nome, data.descricao)
  const categoriaExists = await categoriaRepository.getIdCategoria(data.categoria_id)

  if (isPecaExists) {
    throw new Error("Já existe uma peça com esse nome e descrição");
  }

  if (!categoriaExists) {
    throw new Error("Categoria não existe na base de dados.")
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

export async function updatePecaService(id: number, data: UpdatePecaDTO) {
  const peca = await pecaRepository.getOnlyPeca(id)

  const mudouNome = data.nome && data.nome !== peca.nome;
  const mudouDescricao = data.descricao && data.descricao !== peca.descricao;

  if (mudouNome || mudouDescricao) {
    const nomeParaChecar = data.nome ?? peca.nome;
    const descricaoParaChecar = data.descricao ?? peca.descricao;

    const isPecaExists = await pecaRepository.jaExiste(nomeParaChecar, descricaoParaChecar);

    if (isPecaExists) {
      throw new Error("Já existe outra peça com este nome e descrição.");
    }
  }

  const updatePeca = await pecaRepository.updatePeca(id, data)
  return updatePeca

}
