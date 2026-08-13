import * as ServiceCliente from './cliente.service'
import {Request, Response, NextFunction} from 'express'
import { RequestClienteDTO } from './cliente.dto'

export async function createClienteController(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await ServiceCliente.createClienteService(req.body as RequestClienteDTO)

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
