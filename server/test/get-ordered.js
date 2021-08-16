const { expect } = require("chai");
const { getOrderedFromStock } = require("../modules/get-ordered");
const stock = require("../data/stock.json")
const stockCaseSensitive = require("../data/stock-case-sensitive.json")

describe("Get Ordered List Test", function () {
  describe("Test with starting by 'a'", function () {
    it("Return the correct ordered list for input 'a'", function () {
      var orderedList = getOrderedFromStock('a', stock);
      expect(orderedList).to.deep.equal([
        "abacate",
        "abrico",
        "alecrim",
        "alface",
        "alho"
      ]);
    });
  });

  describe("Test with starting by 'ab'", function () {
    it("Return the correct ordered list for input 'ab'", function () {
      var orderedList = getOrderedFromStock('ab', stock);
      expect(orderedList).to.deep.equal([
        "abacate",
        "abrico"
      ]);
    });
  });

  describe("Test with starting by 'aba'", function () {
    it("Return the correct ordered list for input 'aba'", function () {
      var orderedList = getOrderedFromStock('aba', stock);
      expect(orderedList).to.deep.equal([
        "abacate",
      ]);
    });
  });

  describe("Test with starting by 't'", function () {
    it("Return the correct ordered list for input 't'", function () {
      var orderedList = getOrderedFromStock('t', stock);
      expect(orderedList).to.deep.equal([
        "talharim",
        "tapioca",
        "tofu",
        "tomate",
        "tomilho"
      ]);
    });
  });

  describe("Test with starting by 'to'", function () {
    it("Return the correct ordered list for input 'to'", function () {
      var orderedList = getOrderedFromStock('to', stock);
      expect(orderedList).to.deep.equal([
        "tofu",
        "tomate",
        "tomilho"
      ]);
    });
  });

  describe("Test with starting by 'tom'", function () {
    it("Return the correct ordered list for input 'tom'", function () {
      var orderedList = getOrderedFromStock('tom', stock);
      expect(orderedList).to.deep.equal([
        "tomate",
        "tomilho"
      ]);
    });
  });

  describe("Test with starting by 'tom' (case sentitivity)", function () {
    it("Return the correct ordered list for input 'tom'", function () {
      var orderedList = getOrderedFromStock('tom', stock);
      expect(orderedList).to.deep.equal([
        "tomate",
        "tomilho"
      ]);
    });
  });

  describe("Test with starting by 'tom' (case sentitivity)", function () {
    it("Return the correct ordered list for input 'tom'", function () {
      var orderedList = getOrderedFromStock('to', stockCaseSensitive);
      expect(orderedList).to.deep.equal([
        "tofu",
        "tomate",
        "tomilho"
      ]);
    });
  });

  describe("Test with starting by 'a'", function () {
    it("Return the correct ordered list for input 'a' (case sensitivity)", function () {
      var orderedList = getOrderedFromStock('a', stockCaseSensitive);
      expect(orderedList).to.deep.equal([
        "abacate",
        "abrico",
        "alecrim",
        "alface",
        "alho"
      ]);
    });
  });
});