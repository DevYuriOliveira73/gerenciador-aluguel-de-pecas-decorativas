
import * as catRepository  from './categoria.repository'
import { RequestCategoriaDTO } from './categoria.dto'

export async function createCategoriaService(data: RequestCategoriaDTO): Promise<any> {

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
