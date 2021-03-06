//var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  var specialityShop
  var humdrumShop
  var cheeseShop
  var sufurasShop

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

    sufurasShop = new Shop([new Item("Sulfuras, Hand of Ragnaros", 1, 80)]);

    cheeseShop = new Shop([new Item("Aged Brie", 4, 48)]);

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

  })

  describe("quality", function(){

    it("declines by 1 each day for normal items", function (){
      humdrumShop.updateQuality();
      expect(humdrumShop.items[0].quality).toEqual(19)
      expect(humdrumShop.items[1].quality).toEqual(39)
      expect(humdrumShop.items[2].quality).toEqual(49)
    })


    it("declines twice as fast for normal items", function (){
      outOfDateShop = new Shop([ new Item("potato", 1, 20) ])
      outOfDateShop.updateQuality();
      expect(outOfDateShop.items[0].quality).toEqual(19)
      outOfDateShop.updateQuality();
      expect(outOfDateShop.items[0].quality).toEqual(17)
      outOfDateShop.updateQuality();
      expect(outOfDateShop.items[0].quality).toEqual(15)
    })

  })

  describe("Aged Brie", function(){

    it("increases in quality each day", function (){
      cheeseShop.updateQuality();
      expect(cheeseShop.items[0].quality).toEqual(49)
    })

    it("cannot have a quality above 50", function (){
      cheeseShop.updateQuality();
      expect(cheeseShop.items[0].quality).toEqual(49)
      cheeseShop.updateQuality();
      expect(cheeseShop.items[0].quality).toEqual(50)
      cheeseShop.updateQuality();
      expect(cheeseShop.items[0].quality).toEqual(50)
    })

    it("increases in quality twice as fast after sell-In date", function () {
      let oldCheeseShop = new Shop([new Item("Aged Brie", 1, 40)]);
      oldCheeseShop.updateQuality();
      expect(oldCheeseShop.items[0].quality).toEqual(41)
      expect(oldCheeseShop.items[0].sellIn).toEqual(0)
      console.log(oldCheeseShop.items)
      oldCheeseShop.updateQuality();
      expect(oldCheeseShop.items[0].quality).toEqual(43)
      expect(oldCheeseShop.items[0].sellIn).toEqual(-1)
      oldCheeseShop.updateQuality();
      expect(oldCheeseShop.items[0].quality).toEqual(45)
      expect(oldCheeseShop.items[0].sellIn).toEqual(-2)
    })
  })

  describe("Sulfuras, Hand of Ragnaros", function (){

    it("does not lose quality", function() {
      sufurasShop.updateQuality();
      expect(sufurasShop.items[0].quality).toEqual(80)
      sufurasShop.updateQuality();
      expect(sufurasShop.items[0].quality).toEqual(80)
    })

    it("does not have a sellIn date", function() {
      sufurasShop.updateQuality();
      expect(sufurasShop.items[0].sellIn).toEqual(1)
      sufurasShop.updateQuality();
      expect(sufurasShop.items[0].sellIn).toEqual(1)
    })


  })


})
