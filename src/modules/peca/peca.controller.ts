import * as ServicePeca from './peca.service'
import {Request, Response, NextFunction} from 'express'
import { RequestPecaDTO } from './peca.dto'

export async function createPecaController(req: Request, res: Response, next: NextFunction) {
  try {
    const { nome, categoria_id, descricao, quantidade, imagem } = req.body as RequestPecaDTO

    if (!nome || !categoria_id|| !descricao || !quantidade) {
      return res.status(400).json({
        message: 'Nome, descricao, quantidade são obrigatórios'
      })
    }

    const result = await ServicePeca.createPecaService(req.body)

    return res.status(201).json(result)

  } catch (error) {
    console.error("Error in create peca:", error);

    next(error)
  }

}

export async function getAllPecaController(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await ServicePeca.getAllPecaService()

    return res.status(200).json(result)
  } catch (error) {
    console.error("Error in getAllPecaController:", error);
    next(error)
  }
}


export async function desativarPecaController(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.params.id) {
      throw new Error(`id é necessário`)
    }

    const id = Number(req.params.id)

    const pecaDesativada = await ServicePeca.desativarPeca(id)

    res.status(200).json(pecaDesativada)
  } catch (error) {
    console.error("Error in desativarPecaController:", error);
    next(error)
  }
}
