
import * as clienteRepository  from './cliente.repository'
import { RequestClienteDTO } from './cliente.dto'

export async function createClienteService(data: RequestClienteDTO): Promise<any> {

  const isCategoriaExists = await clienteRepository.getCliente(data.cpf)

  if (isCategoriaExists) {
    throw new Error('Cliente já existe')
  }

  const categoria = await clienteRepository.createClienteRepository(data)

  return categoria;
}


export async function getAllClienteService() {
  const getAllCategoria = await clienteRepository.getAllCliente()


  return getAllCategoria
}
