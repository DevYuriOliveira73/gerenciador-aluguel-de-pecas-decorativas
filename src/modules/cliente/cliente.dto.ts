import * as z from "zod";

export const createClienteSchema = z.object({
  nome: z
    .string({ error: "Informe o nome do cliente" })
    .min(2, { error: "O nome precisa ter pelo menos 2 caracteres" }),

  sobrenome: z
    .string({ error: "Informe o sobrenome do cliente" })
    .min(2, { error: "O sobrenome precisa ter pelo menos 2 caracteres" }),

  email: z
    .email({ error: "Informe um e-mail válido" }),

  telefone: z
    .string({ error: "Informe o telefone do cliente" })
    .min(10, { error: "Telefone inválido" }),

  endereco: z
    .string({ error: "Informe o endereço do cliente" })
    .min(5, { error: "Informe um endereço válido" }),

  cpf: z
    .string({ error: "Informe o CPF do cliente" })
    .length(11, { error: "O CPF deve ter exatamente 11 dígitos" }),
});

export type RequestClienteDTO = z.infer<typeof createClienteSchema>;
