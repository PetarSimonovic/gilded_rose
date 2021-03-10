//var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  let specialItems = [
    new Item("Aged Brie", 30, 10),
    new Item("Backstage passes to a TAFKAL80ETC concert", 50, 5),
    new Item("Sulfuras, Hand of Ragnaros", 0, 80)
  ]

  let humdrumItems = [
    new Item("potato", 20, 20),
    new Item("bread roll", 10, 40),
    new Item("rubber duck", 100, 50)
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

    it("can recognise sellIn of items", function() {
      gildedRose = new Shop(humdrumItems);
      expect(gildedRose.items[0].sellIn).toEqual(20);
    });

    it("can recognise quality of items", function() {
      gildedRose = new Shop(humdrumItems);
      expect(gildedRose.items[1].quality).toEqual(40);
    });

  });

  describe("sellIn", function () {

    it("declines each day", function() {
      gildedRose = new Shop(humdrumItems);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].sellIn).toEqual(19)
      expect(gildedRose.items[1].sellIn).toEqual(9)
      expect(gildedRose.items[2].sellIn).toEqual(99)
    })

  })
});
