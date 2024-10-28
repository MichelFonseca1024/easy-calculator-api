import { Request, Response, Router } from "express";
import { numbersController } from "../controllers/numbers.controller";
import FactoryResponse from "../helpers/FactoryResponse";

const router = Router();

router.get("/", (request: Request, response: Response) => {
  FactoryResponse.buildJson(response, 200, { message: "App Online!" });
});

router.use("/numbers", numbersController);

router.all("*", (request: Request, response: Response) => {
  FactoryResponse.buildJson(response, 404, { message: "rota não encontrada" });
});
export default router;
