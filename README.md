### Gilded rose tech test

# The brief

Refactor the code in such a way that adding the new "conjured" functionality is easy.

Make changes to the UpdateQuality method and add any new code as long as everything still works correctly.

Do not alter the Item class or Items property (you can make the UpdateQuality method and Items property static if you like).


## System features

**SellIn**: Denotes the number of days that the Gilded Rose has to sell the item.
- The value declines at the end of each day.

**Quality**: Denotes how valuable the item is.
- Value declines at the end of each day.
- It declines twice as fast once the sell-by date has passed
- The value cannot be negative.
- The value cannot be more than 50

## Items

**Aged Brie**:
- increases in Quality the older it gets

**Sulfuras**
- Has no SellIn date
- Never decreases in Quality

**Backstage passes**
- Quality rises as SellIn date approaches
 - 10 days or less: Quality increases by 2
 - 5 days or less: Quality increases by 3
 - 0 days left: Quality drops to 0

 **Conjured**
 - Degrade in Quality twice as fast as normal items
