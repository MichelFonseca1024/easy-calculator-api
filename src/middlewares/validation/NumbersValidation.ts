/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Request, Response, NextFunction } from "express";
import { object, array, number } from "yup";
import FactoryResponse from "../../helpers/FactoryResponse";

const numbersPropertyValidation = array()
  .required("O campo numbers é obrigatório")
  .of(
    number()
      .integer("O campo numbers precisa ser inteiro")
      .min(1, "O campo numbers só pode conter numeros maiores que 0"),
  )
  .min(2, "O campo numbers deve conter pelo menos 2 numeros")
  .max(100, "O campo numbers deve conter no maximo 100 numeros");

export default class NumberValidation {
  async sum(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const sumSchema = object({
        numbers: numbersPropertyValidation,
      });

      await sumSchema.validate(req.body, { abortEarly: false, strict: true });

      next();
    } catch (err: any) {
      FactoryResponse.buildJson(res, 400, { messages: err.errors });
    }
  }

  async average(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const sumSchema = object({
        numbers: numbersPropertyValidation,
      });

      await sumSchema.validate(req.body, { abortEarly: false, strict: true });

      next();
    } catch (err: any) {
      FactoryResponse.buildJson(res, 400, { messages: err.errors });
    }
  }
}
