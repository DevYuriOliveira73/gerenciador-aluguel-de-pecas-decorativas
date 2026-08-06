import * as ServiceCliente from './cliente.service'
import {Request, Response, NextFunction} from 'express'
import { RequestClienteDTO } from './cliente.dto'

export async function createClienteController(req: Request, res: Response, next: NextFunction) {
  try {
    const { nome, cpf, email, endereco, sobrenome, telefone } = req.body as RequestClienteDTO

    if (!nome || !cpf || !email || !endereco || !sobrenome || !telefone) {
      return res.status(400).json({
        message: 'Nome, CPF, email, endereço, sobrenome e telefone são obrigatórios'
      })
    }

    const result = await ServiceCliente.createClienteService(req.body)

    return res.status(201).json(result)

  } catch (error) {
    console.error("Error in create client:", error);

    next(error)
  }

}

export async function getAllClienteController(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await ServiceCliente.getAllClienteService()

    return res.status(201).json(result)
  } catch (error) {
    console.error("Error in get categories:", error);
    next(error)
  }
}
