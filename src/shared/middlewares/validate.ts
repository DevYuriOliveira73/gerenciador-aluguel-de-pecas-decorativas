import { Request, Response, NextFunction } from "express";
import { ZodType } from "zod";

export function validate(schema: ZodType) {
  return (req: Request, res: Response, next: NextFunction) => {
    const resultado = schema.safeParse(req.body);

    if (!resultado.success) {
      // console.error(resultado.error.issues)
      const errors_tratados = resultado.error.issues.map((e)=> ({
        campo : e.path[0],
        message : e.message
      }))

      return res.status(400).json({
        message: "Dados inválidos",
        errors: errors_tratados,
      });
    }

    req.body = resultado.data;
    next();
  };
}


