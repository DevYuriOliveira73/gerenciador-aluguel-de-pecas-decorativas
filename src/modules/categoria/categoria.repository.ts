import {prisma} from "../../database/prisma";
import { RequestCategoriaDTO, updateCategoriaDTO } from "./categoria.dto";

// export async function createPostRepository(data: CreatePostDTO) : Promise<PostResponseDTO> {

export async function createCategoriaRepository(data: RequestCategoriaDTO): Promise<any> {

  const new_categoria = await prisma.categoria.create({
    data: {
      nome: data.nome,
      descricao: data.descricao
    }
  })

  return new_categoria;
}


export async function getCategoria(nome: string): Promise<any> {
  const categoria = await prisma.categoria.findUnique({
    where: {
      nome: nome
    }
  })
  return categoria;
}

export async function getIdCategoria(id: number): Promise<any> {
  const categoria = await prisma.categoria.findUnique({
    where: {
      id: id
    }
  })
  return categoria;
}


export async function getAllCategorias(): Promise<any> {
  const get_all_categoria = await prisma.categoria.findMany()

  return get_all_categoria;
}


export async function updateCategoria(id: number, data: updateCategoriaDTO) {
  const updateCategoria = await prisma.categoria.update({
    where: {id: id},
    data: {
      ...(data.nome && { nome: data.nome}),
      ...(data.descricao && { descricao: data.descricao})
    }
  })

  return updateCategoria;
}
