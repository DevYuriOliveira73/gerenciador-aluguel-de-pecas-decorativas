import {prisma} from "../../database/prisma";
import { RequestCategoriaDTO } from "./categoria.dto";

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

export async function getAllCategorias(): Promise<any> {
  const get_all_categoria = await prisma.categoria.findMany()

  return get_all_categoria;
}
