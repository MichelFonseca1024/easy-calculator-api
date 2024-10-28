import { SumDTO, DivideDTO } from "../../../dtos/number";
import Number from "../../../services/Number";

describe("Number Service", () => {
  let numberService: Number;

  beforeEach(() => {
    numberService = new Number();
  });

  describe("sum", () => {
    it("should return the correct sum of two numbers", () => {
      const data: SumDTO = { firstAddend: 10, secondAddend: 15 };
      const result = numberService.sum(data);
      expect(result).toBe(25);
    });
  });

  describe("divide", () => {
    it("should return the correct division of two numbers with 3 decimal places", () => {
      const data: DivideDTO = { dividend: 10, divisor: 3 };
      const result = numberService.divide(data);
      expect(result).toBeCloseTo(3.333, 3);
    });

    it("should handle division by a decimal number", () => {
      const data: DivideDTO = { dividend: 10, divisor: 2.5 };
      const result = numberService.divide(data);
      expect(result).toBeCloseTo(4.0);
    });
  });
});
