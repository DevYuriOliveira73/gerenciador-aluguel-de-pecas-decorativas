import * as z from "zod";

const createAluguelSchema = z.object({
  data_inicio: z.iso.date({ error: "Informe a data de início do aluguel" }),

  data_fim: z.iso.date({ error: "Informe a data de devolução prevista" }),

  preco: z
    .number({ error: "Informe o valor do aluguel" })
    .positive({ error: "O valor do aluguel precisa ser maior que zero" }),

  devolvido: z.boolean().default(false),

  pecasAlugadas: z
    .array(
      z.object({
        peca_id: z.number({ error: "Peça inválida" }).int(),
        quantidade: z
          .number({ error: "Informe a quantidade dessa peça" })
          .int({ error: "A quantidade precisa ser um número inteiro" })
          .positive({ error: "A quantidade precisa ser maior que zero" }),
      })
    )
    .min(1, { error: "Selecione pelo menos uma peça para o aluguel" }),
});

export type CreateAluguelDTO = z.infer<typeof createAluguelSchema>;