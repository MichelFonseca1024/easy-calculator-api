import { Router, Request, Response, NextFunction } from "express";
import Numbers from "../services/Numbers";
import FactoryResponse from "../helpers/FactoryResponse";
import NumberValidation from "../middlewares/validation/NumbersValidation";

const router = Router();
const numbersService = new Numbers();
const numberValidation = new NumberValidation();

router.post(
  "/average",
  (req: Request, res: Response, next: NextFunction) => {
    numberValidation.average(req, res, next);
  },
  async (request: Request, response: Response) => {
    try {
      const { numbers } = request.body;

      const avarage = numbersService.avarage({ numbers });

      FactoryResponse.buildJson(response, 200, { avarage });
    } catch (err) {
      FactoryResponse.buildJson(response, 500, { message: err });
    }
  },
);

router.post(
  "/sum",
  (req: Request, res: Response, next: NextFunction) => {
    numberValidation.sum(req, res, next);
  },
  async (request: Request, response: Response) => {
    try {
      const { numbers } = request.body;

      const sum = numbersService.sum({ numbers });

      FactoryResponse.buildJson(response, 200, { sum });
    } catch (err) {
      FactoryResponse.buildJson(response, 500, { message: err });
    }
  },
);

export { router as numbersController };
