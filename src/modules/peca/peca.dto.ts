import * as z from "zod";

export const createPecaSchema = z.object({
  nome: z
    .string({ error: "Informe o nome do cliente" })
    .min(2, { error: "O nome precisa ter pelo menos 2 caracteres" }),

  descricao : z.string({error: "Informe a descrição da categoria"}),

  quantidade : z
    .int({ error: "Informe a quantidade de peças" })
    .positive({ error: "A quantidade de peças precisa ser maior que zero" }),

  categoria_id : z
    .number({error: "Categoria inválida"}),

  imagem : z.string({error: "Imagem em formato errado"}).optional(),
})

export type CreatePecaDTO = z.infer<typeof createPecaSchema>
