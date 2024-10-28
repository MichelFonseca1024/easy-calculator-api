import { AvarageDTO, SumManyDTO } from "../dtos/numbers";
import NumberService from "./Number";

export default class Numbers {
  private numberService = new NumberService();

  public sum({ numbers }: SumManyDTO): number {
    return numbers.reduce(
      (firstAddend, secondAddend) =>
        this.numberService.sum({ firstAddend, secondAddend }),
      0,
    );
  }

  public avarage({ numbers }: AvarageDTO): number {
    const dividend = this.sum({ numbers });
    const divisor = numbers.length;

    return this.numberService.divide({ dividend, divisor });
  }
}
