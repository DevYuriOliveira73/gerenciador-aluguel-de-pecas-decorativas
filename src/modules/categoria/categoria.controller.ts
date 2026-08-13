import * as ServiceCategoria from './categoria.service'
import {Request, Response, NextFunction} from 'express'
import { CreateCategoriaDTO, updateCategoriaDTO } from './categoria.dto'

export async function createCategoriaController(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await ServiceCategoria.createCategoriaService(req.body as CreateCategoriaDTO)

    return res.status(201).json(result)

  } catch (error) {
    console.error("Error in createCategoriaController:", error);

    next(error)
  }

}

export async function getCategoriaController(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await ServiceCategoria.getAllCategoriaService()


    return res.status(201).json(result)
  } catch (error) {
    console.error("Error in get categories:", error);
    next(error)
  }
}

export async function updateCategoriaController(req: Request, res: Response, next: NextFunction) {

  try {
    const id = Number(req.params.id)


    const result = await ServiceCategoria.updateCategoriaService(id, req.body)

    return res.status(200).json(result)

  } catch (error) {
    console.error({error});
    next(error)
  }

}
