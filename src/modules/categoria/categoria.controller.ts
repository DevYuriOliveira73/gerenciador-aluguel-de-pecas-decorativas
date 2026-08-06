import * as ServiceCategoria from './categoria.service'
import {Request, Response, NextFunction} from 'express'
import { RequestCategoriaDTO } from './categoria.dto'

export async function createCategoriaController(req: Request, res: Response, next: NextFunction) {
  try {
    const { nome, descricao } = req.body as RequestCategoriaDTO

    if (!nome || !descricao) {
      return res.status(400).json({
        message: 'Nome e descrição são obrigatórios'
      })
    }

    const result = await ServiceCategoria.createCategoriaService(req.body)

    return res.status(201).json(result)

  } catch (error) {
    console.error("Error in create category:", error);

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
