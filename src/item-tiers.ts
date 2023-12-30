import { Item, ItemProps, ItemType } from "./models";
import cherry1 from './img/cherry1.png';
import cherry2 from './img/cherry2.png';
import cherry3 from './img/cherry3.png';
import cherry4 from './img/cherry4.png';
import cherry5 from './img/cherry5.png';
import cherry6 from './img/cherry6.png';
import apple1 from './img/apple1.png';
import apple2 from './img/apple2.png';
import apple3 from './img/apple3.png';
import apple4 from './img/apple4.png';
import apple5 from './img/apple5.png';
import apple6 from './img/apple6.png';
import watermelon1 from './img/watermelon1.png';
import watermelon2 from './img/watermelon2.png';
import watermelon3 from './img/watermelon3.png';
import watermelon4 from './img/watermelon4.png';
import watermelon5 from './img/watermelon5.png';
import dog1 from './img/dog1.png';
import dog2 from './img/dog2.png';
import dog3 from './img/dog3.png';
import perijok1 from './img/perijok1.png';
import perijok2 from './img/perijok2.png';
import perijok3 from './img/perijok3.png';
import perijok4 from './img/perijok4.png';
import petcase from './img/petcase.png';
import bucket from './img/bucket.png';
import owen from './img/owen1.png';

const owens = new Map<number, ItemProps>();
owens.set(1, {
    displayIcon: owen,
    priceInOrder: 0,
    hasAbility: true,
    ability: {
        canProduce: true,
        produce: [
            {
                probability: 100,
                type: ItemType.Perijok,
                level: 1
            }
        ],
        needsEnergy: true,
        energyCost: 1
    }
});

const petcases = new Map<number, ItemProps>();
petcases.set(1, {
    displayIcon: petcase,
    priceInOrder: 0,
    hasAbility: true,
    ability: {
        canProduce: true,
        produce: [
            {
                probability: 100,
                type: ItemType.Dog,
                level: 1
            }
        ],
        needsEnergy: true,
        energyCost: 3
    }
});

const buckets = new Map<number, ItemProps>();
buckets.set(1, {
    displayIcon: bucket,
    priceInOrder: 0,
    hasAbility: true,
    ability: {
        canProduce: true,
        produce: [
            {
                probability: 30,
                type: ItemType.Cherry,
                level: 1
            },
            {
                probability: 10,
                type: ItemType.Cherry,
                level: 2
            },
            {
                probability: 30,
                type: ItemType.Apple,
                level: 1
            },   
            {
                probability: 10,
                type: ItemType.Apple,
                level: 2
            },            
            {
                probability: 20,
                type: ItemType.Watermelon,
                level: 1
            }
        ],
        needsEnergy: true,
        energyCost: 1
    }
});

const perijoks = new Map<number, ItemProps>();
perijoks.set(1, {
    displayIcon: perijok1,
    priceInOrder: 10,
    hasAbility: false,
    ability: null
});
perijoks.set(2, {
    displayIcon: perijok2,
    priceInOrder: 20,
    hasAbility: false,
    ability: null
});
perijoks.set(3, {
    displayIcon: perijok3,
    priceInOrder: 40,
    hasAbility: false,
    ability: null
});
perijoks.set(4, {
    displayIcon: perijok4,
    priceInOrder: 80,
    hasAbility: false,
    ability: null
});

const apples = new Map<number, ItemProps>();
apples.set(1, {
    displayIcon: apple1,
    priceInOrder: 10,
    hasAbility: false,
    ability: null
});
apples.set(2, {
    displayIcon: apple2,
    priceInOrder: 20,
    hasAbility: false,
    ability: null
});
apples.set(3, {
    displayIcon: apple3,
    priceInOrder: 40,
    hasAbility: false,
    ability: null
});
apples.set(4, {
    displayIcon: apple4,
    priceInOrder: 80,
    hasAbility: false,
    ability: null
});
apples.set(5, {
    displayIcon: apple5,
    priceInOrder: 160,
    hasAbility: false,
    ability: null
});
apples.set(6, {
    displayIcon: apple6,
    priceInOrder: 320,
    hasAbility: false,
    ability: null
});

const cherries = new Map<number, ItemProps>();
cherries.set(1, {
    displayIcon: cherry1,
    priceInOrder: 10,
    hasAbility: false,
    ability: null
});
cherries.set(2, {
    displayIcon: cherry2,
    priceInOrder: 20,
    hasAbility: false,
    ability: null
});
cherries.set(3, {
    displayIcon: cherry3,
    priceInOrder: 40,
    hasAbility: false,
    ability: null
});
cherries.set(4, {
    displayIcon: cherry4,
    priceInOrder: 80,
    hasAbility: false,
    ability: null
});
cherries.set(5, {
    displayIcon: cherry5,
    priceInOrder: 160,
    hasAbility: false,
    ability: null
});
cherries.set(6, {
    displayIcon: cherry6,
    priceInOrder: 320,
    hasAbility: false,
    ability: null
});

const watermelons = new Map<number, ItemProps>();
watermelons.set(1, {
    displayIcon: watermelon1,
    priceInOrder: 20,
    hasAbility: false,
    ability: null
});
watermelons.set(2, {
    displayIcon: watermelon2,
    priceInOrder: 40,
    hasAbility: false,
    ability: null
});
watermelons.set(3, {
    displayIcon: watermelon3,
    priceInOrder: 80,
    hasAbility: false,
    ability: null
});
watermelons.set(4, {
    displayIcon: watermelon4,
    priceInOrder: 160,
    hasAbility: false,
    ability: null
});
watermelons.set(5, {
    displayIcon: watermelon5,
    priceInOrder: 320,
    hasAbility: false,
    ability: null
});

const dogs = new Map<number, ItemProps>();
dogs.set(1, {
    displayIcon: dog1,
    priceInOrder: 20,
    hasAbility: false,
    ability: null
});
dogs.set(2, {
    displayIcon: dog2,
    priceInOrder: 50,
    hasAbility: false,
    ability: null
});
dogs.set(3, {
    displayIcon: dog3,
    priceInOrder: 100,
    hasAbility: false,
    ability: null
});

const itemTiers = new Map<ItemType, Map<number, ItemProps>>();
itemTiers.set(ItemType.Petcase, petcases);
itemTiers.set(ItemType.Bucket, buckets);
itemTiers.set(ItemType.Apple, apples);
itemTiers.set(ItemType.Cherry, cherries);
itemTiers.set(ItemType.Watermelon, watermelons);
itemTiers.set(ItemType.Dog, dogs);
itemTiers.set(ItemType.Perijok, perijoks);
itemTiers.set(ItemType.Owen, owens);

const defaultProps = {
    displayIcon: "",
    hasAbility: false,
    ability: null
} as ItemProps;

export const getOrderItemTypes = (): ItemType[] => {
    return [
        ItemType.Apple,
        ItemType.Cherry,
        ItemType.Watermelon,
        ItemType.Dog,
        ItemType.Perijok
    ];
}

export const getMaxLvl = (type: ItemType) => {
    return itemTiers.get(type)?.size ?? 0 + 1;
}

export const getItemProps = (item: Item) : ItemProps => {
    return itemTiers.get(item.type)?.get(item.level) ?? defaultProps;
}

export const isItemsEqual = (item1: Item, item2: Item) : boolean => {
    return item1.type === item2.type && item1.level === item2.level;
}