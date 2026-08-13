import * as z from "zod";

export const createCategoriaSchema = z.object({
  nome : z.string({error: "Informe o nome da categoria"}),
  descricao : z.string({error: "Informe a descrição da categoria"})
})

export type CreateCategoriaDTO = z.infer<typeof createCategoriaSchema>


export const updateCategoriaSchema = createCategoriaSchema.partial().refine(
  (data) => data.nome !== undefined || data.descricao !== undefined,

  {
    message: "Informe ao menos um campo para atualização.",
    path: ["nome e descrição"]
  }

)
export type updateCategoriaDTO = z.infer<typeof updateCategoriaSchema>













export interface RequestCategoriaDTO {
  nome: string;
  descricao: string;
}


export type UpdateRequestCategoriaDTO = RequestCategoriaDTO;


