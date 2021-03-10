//var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  describe("Stockkeeping", function() {

    it("can add an item of stock", function() {
      gildedRose = new Shop([ new Item("Aged Brie", 30, 50) ]);
      items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("Aged Brie");
    });
  });
});
