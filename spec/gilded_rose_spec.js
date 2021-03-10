//var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  let specialItems = [
    new Item("Aged Brie", 30, 10),
    new Item("Backstage passes to a TAFKAL80ETC concert", 50, 5),
    new Item("Sulfuras, Hand of Ragnaros", 0, 80)
  ]

  describe("initialisation", function() {

    it("can add an item of stock", function() {
      gildedRose = new Shop([ new Item("Aged Brie", 30, 50) ]);
      expect(gildedRose.items[0].name).toEqual("Aged Brie");
    });

    it("can add multiple items of stock", function() {
      gildedRose = new Shop(specialItems);
      expect(gildedRose.items[0].name).toEqual("Aged Brie");
      expect(gildedRose.items[1].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
      expect(gildedRose.items[2].name).toEqual("Sulfuras, Hand of Ragnaros");
    });

  });
});
