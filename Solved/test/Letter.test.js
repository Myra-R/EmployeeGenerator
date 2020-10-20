const Letter = require("../lib/Letter");

describe("Letter class", () => {
  it("Characters that aren't digits or letters are instantly visible", () => {
    //var test = new Letter("?")
    // test.visible==true
    expect(new Letter("?").visible).toBe(true);
  });

  it("toString returns _ for letters", () => {
        // var test = new Letter("a")
        // test.toString()  == "_"
    expect(new Letter("a").toString()).toBe("_");
  });

  describe("guess", () => {
    it("Correct guess returns true", () => {
       // var test = new Letter("j")
       // test.guess("j") == true

      expect(new Letter("j").guess("j")).toBe(true);
    });

    it("Incorrect guess returns false", () => {
        // var test = new Letter("j")
        // test.guess("l") == false
      expect(new Letter("j").guess("l")).toBe(false);
    });
  });

  describe("getSolution", () => {
    it("returns character", () => {
       // var test = new Letter("l")
       // test.getSolution() == "l"
      expect(new Letter("l").getSolution()).toBe("l");
    });
  });
});
