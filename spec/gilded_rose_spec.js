//var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  var specialityShop
  var humdrumShop

  beforeEach(function () {
    specialityShop = new Shop([
      new Item("Aged Brie", 30, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 50, 5),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80)
    ]);
    humdrumShop = new Shop([
      new Item("potato", 20, 20),
      new Item("bread roll", 10, 40),
      new Item("rubber duck", 100, 50)
    ]);
  })

  describe("initialisation", function() {

    it("can add an item of stock", function() {
      expect(specialityShop.items[0].name).toEqual("Aged Brie");
    });

    it("can add multiple items of stock", function() {
      expect(specialityShop.items[0].name).toEqual("Aged Brie");
      expect(specialityShop.items[1].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
      expect(specialityShop.items[2].name).toEqual("Sulfuras, Hand of Ragnaros");
    });

    it("can recognise sellIn of items", function() {
      expect(humdrumShop.items[0].sellIn).toEqual(20);
    });

    it("can recognise quality of items", function() {
      expect(humdrumShop.items[1].quality).toEqual(40);
    });

  });

  describe("sellIn", function () {

    it("declines each day", function() {
      humdrumShop.updateQuality();
      expect(humdrumShop.items[0].sellIn).toEqual(19)
      expect(humdrumShop.items[1].sellIn).toEqual(9)
      expect(humdrumShop.items[2].sellIn).toEqual(99)
    })

    it("does not decline for sulfuras", function() {
      gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 80)]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].sellIn).toEqual(0)

    })

  })

  describe("quality", function(){

    it("declines each day for normal items", function (){
      humdrumShop.updateQuality();
      expect(humdrumShop.items[0].quality).toEqual(19)
      expect(humdrumShop.items[1].quality).toEqual(39)
      expect(humdrumShop.items[2].quality).toEqual(49)
    })

  })

})
