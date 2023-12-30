export {};

// import { Item, ItemProps, ItemType } from "./models";
// import mouse1 from './img/mouse1.png';
// import mouse2 from './img/mouse2.png';
// import mouse3 from './img/mouse3.png';
// import mouse4 from './img/mouse4.png';
// import mouse5 from './img/mouse5.png';
// import mouse6 from './img/mouse6.png';
// import mouse7 from './img/mouse7.png';
// import mouse8 from './img/mouse8.png';
// import table from './img/table.png';

// const tables = new Map<number, ItemProps>();
// tables.set(1, {
//     displayIcon: table,
//     priceInOrder: 0,
//     hasAbility: true,
//     ability: {
//         canProduce: true,
//         produce: [
//             {
//                 probability: 80,
//                 type: ItemType.Mouse,
//                 level: 1
//             },
//             {
//                 probability: 20,
//                 type: ItemType.Mouse,
//                 level: 2
//             }
//         ],
//         needsEnergy: true,
//         energyCost: 1
//     }
// });

// const mouses = new Map<number, ItemProps>();
// mouses.set(1, {
//     displayIcon: mouse1,
//     priceInOrder: 50,
//     hasAbility: false,
//     ability: null
// });

// mouses.set(2, {
//     displayIcon: mouse2,
//     priceInOrder: 125,
//     hasAbility: false,
//     ability: null
// });

// mouses.set(3, {
//     displayIcon: mouse3,
//     priceInOrder: 310,
//     hasAbility: false,
//     ability: null
// });

// mouses.set(4, {
//     displayIcon: mouse4,
//     priceInOrder: 770,
//     hasAbility: false,
//     ability: null
// });

// mouses.set(5, {
//     displayIcon: mouse5,
//     priceInOrder: 1850,
//     hasAbility: false,
//     ability: null
// });

// mouses.set(6, {
//     displayIcon: mouse6,
//     priceInOrder: 2470,
//     hasAbility: false,
//     ability: null
// });

// mouses.set(7, {
//     displayIcon: mouse7,
//     priceInOrder: 6800,
//     hasAbility: false,
//     ability: null
// });

// mouses.set(8, {
//     displayIcon: mouse8,
//     priceInOrder: 6800,
//     hasAbility: false,
//     ability: null
// });

// const itemTiers = new Map<ItemType, Map<number, ItemProps>>();
// itemTiers.set(ItemType.Table, tables);
// itemTiers.set(ItemType.Mouse, mouses);

// const defaultProps = {
//     displayIcon: "",
//     hasAbility: false,
//     ability: null
// } as ItemProps;

// export const getOrderItemTypes = (): ItemType[] => {
//     return [
//         ItemType.Mouse
//     ];
// }

// export const getMaxLvl = (type: ItemType) => {
//     return itemTiers.get(type)?.size ?? 0 + 1;
// }

// export const getItemProps = (item: Item) : ItemProps => {
//     // console.log(itemTiers.get(item.type));
//     return itemTiers.get(item.type)?.get(item.level) ?? defaultProps;
// }

// export const isItemsEqual = (item1: Item, item2: Item) : boolean => {
//     return item1.type === item2.type && item1.level === item2.level;
// }