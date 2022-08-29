'use strict';
const leftJoin = require("./joinLeft");

describe("leftJoin", () => {
  it("should return an object", () => {
    const result = leftJoin(
      {
        fond: "enamored",
        wrath: "anger",
        diligent: "employed",
        guide: "usher",
      },
      {
        fond: "averse",
        wrath: "delight",
        diligent: "idle",
        guide: "follow",
        flow: "jam",
      }
    );
    console.log(result);
    expect(result).toStrictEqual({
      fond: ["enamored", "averse"],
      wrath: ["anger", "delight"],
      diligent: ["employed", "idle"],
      guide: ["usher", "follow"],
      flow: [null, "jam"],
    });
  });
});
