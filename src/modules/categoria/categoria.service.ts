
import * as catRepository  from './categoria.repository'
import {CreateCategoriaDTO, updateCategoriaDTO } from './categoria.dto'

export async function createCategoriaService(data: CreateCategoriaDTO): Promise<any> {

  const isCategoriaExists = await catRepository.getCategoria(data.nome)

  if (isCategoriaExists) {
    throw new Error('Categoria já existe')
  }

  const categoria = await catRepository.createCategoriaRepository(data)

  return categoria;
}


export async function getAllCategoriaService() {

  const getAllCategoria = await catRepository.getAllCategorias()
  return getAllCategoria
}

export async function updateCategoriaService(id: number, data: updateCategoriaDTO): Promise<any> {

  if (data.nome) {
    const isCategoriaExists = await catRepository.getCategoria(data.nome)

    if(isCategoriaExists && id !== isCategoriaExists.id) {
      throw new Error('Categoria já existe')
    }
  }


  const updateCategoria = await catRepository.updateCategoria(id, data)
  return updateCategoria;

}
