import { SumDTO, DivideDTO } from "../dtos/number";

export default class Number {
  public sum(data: SumDTO): number {
    const { firstAddend, secondAddend } = data;

    const sumResult = firstAddend + secondAddend;

    return sumResult;
  }
  public divide(data: DivideDTO): number {
    const { dividend, divisor } = data;

    const divisionResult = (dividend / divisor).toFixed(3);

    return parseFloat(divisionResult);
  }
}
