import {prisma} from "../../database/prisma";
import { RequestClienteDTO } from "./cliente.dto";


export async function createClienteRepository(data: RequestClienteDTO): Promise<any> {

  const new_cliente = await prisma.cliente.create({
    data: {
      nome: data.nome,
      sobrenome: data.sobrenome,
      email: data.email,
      telefone: data.telefone,
      endereco: data.endereco,
      cpf: data.cpf
    }
  })

  return new_cliente;
}


export async function getCliente(cpf: string): Promise<any> {
  const categoria = await prisma.cliente.findUnique({
    where: {
      cpf: cpf
    }
  })
  return categoria;
}

export async function getAllCliente(): Promise<any> {
  const get_all_cliente = await prisma.cliente.findMany()

  return get_all_cliente;
}
