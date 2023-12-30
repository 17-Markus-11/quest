export interface ItemProps {
    displayIcon: string,
    priceInOrder: number,
    hasAbility: boolean,
    ability: ItemAbility | null
}

export interface ItemAbility {
    canProduce: boolean,
    produce: ProduceAbility[],
    needsEnergy: boolean,
    energyCost: number
}

export interface ProduceAbility {
    probability: number,
    type: ItemType,
    level: number
}

export interface Order {
    items: Item[],
    price: number
}

export interface Quest {
    id: number,
    energy: number,
    text: string,
    pictureUrl: string | null,
    answers: string[],
    correctAnswer: string
}

export interface Present {
    id: number,
    moneyCosts: number,
    pictureUrl: string
}

export interface Table {
    items: Array<TableItem>,
    itemIndexes: Map<number, number>
    maxCount: number
}

export interface TableItem extends Item {
    location: number
}

export interface Item {
    type: ItemType,
    level: number,
}

export enum ItemType {
    /*Mouse,
    Table*/
    Cherry,
    Apple,
    Watermelon,
    Dog,
    Bucket,
    Petcase,
    Perijok,
    Owen
}