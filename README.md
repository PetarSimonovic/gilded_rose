### Gilded rose tech test

# The brief

Refactor the existing gilded_rose code in such a way that adding the new "conjured" functionality is easy.

Make changes to the UpdateQuality method and add any new code as long as everything still works correctly.

Do not alter the Item class or Items property (you can make the UpdateQuality method and Items property static if you like).


## System features

**SellIn**: Denotes the number of days that the Gilded Rose has to sell the item.
- The value declines at the end of each day.

**Quality**: Denotes how valuable the item is.
- Quality declines at the end of each day. (except for Sulfuras)
- It declines twice as fast once the sell-by date has passed
- The quality cannot be negative.
- The quality cannot be more than 50 (except for Sulfuras)

## Items

**Aged Brie**:
- increases in Quality the older it gets

**Sulfuras, Hand of Ragnaros**
- Has no SellIn date
- Never decreases in Quality
- It's quality is always 80

**Backstage passes to a TAFKAL80ETC concert**
- Quality rises as SellIn date approaches
 - 10 days or less: Quality increases by 2
 - 5 days or less: Quality increases by 3
 - 0 days left: Quality drops to 0

 **Conjured**
 - Degrade in Quality twice as fast as normal items
