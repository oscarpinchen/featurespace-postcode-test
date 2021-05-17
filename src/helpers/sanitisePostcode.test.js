import { sanitisePostcode } from "./sanitisePostcode";

describe("Sanitise Postcode", () => {
  test("should lowercase, trim and remove spaces from postcodes", () => {
    const input = "CB3 0QB   ";
    const output = "cb30qb";
    expect(sanitisePostcode(input)).toEqual(output);
  });
});
