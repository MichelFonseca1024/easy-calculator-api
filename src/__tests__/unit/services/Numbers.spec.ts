import Numbers from "../../../services/Numbers";
import { SumManyDTO, AvarageDTO } from "../../../dtos/numbers";

describe("Numbers Service", () => {
  let numbersService: Numbers;

  beforeEach(() => {
    numbersService = new Numbers();
  });

  describe("sum", () => {
    it("should return the correct sum of three numbers", () => {
      const data: SumManyDTO = { numbers: [10, 20, 30] };

      const result = numbersService.sum(data);
      expect(result).toBe(60);
    });
  });

  describe("average", () => {
    it("should return the correct average of three numbers", () => {
      const data: AvarageDTO = { numbers: [10, 20, 30] };

      const result = numbersService.avarage(data);
      expect(result).toBeCloseTo(20, 3);
    });
  });
});
