import React, { Component } from 'react';
import style from './Main.module.css';
import { Item, ItemType, Order, Present, Quest, Table, TableItem } from './models';
import { getItemProps, getMaxLvl, getOrderItemTypes, isItemsEqual } from './item-tiers';
import quests from './quests';
import presents from './presents';
import  pr  from './img/pr.png';

type State = {
    table: Table,
    orders: Order[],
    money: number,
    energy: number,
    dragIndex: number,
    canSelectPresent: boolean,
    isPresentActive: boolean,
    isPresentOpened: boolean,
    presentOpenedSrc: string,
    presents: Present[],
    isQuestActive: boolean,
    activeQuest: Quest | null,
    quests: Quest[]
}

class Main extends Component {
    state: Readonly<State> = {
        table: {
            itemIndexes: new Map(),
            items: [],
            maxCount: 49
        },
        orders: [],
        money: 0,
        energy: 0,
        dragIndex: -1,
        canSelectPresent: false,
        isPresentActive: false,
        isPresentOpened: false,
        presentOpenedSrc: "",
        presents: [],
        isQuestActive: false,
        activeQuest: null,
        quests: []
    }

    componentDidMount(): void {
        const tableItems = [
            {
                type: ItemType.Petcase,
                level: 1,
                location: 7
            },
            {
                type: ItemType.Bucket,
                level: 1,
                location: 12
            },
            {
                type: ItemType.Owen,
                level: 1,
                location: 3
            }
        ];

        const orders = [
            this.getNewRandomOrder(),
            this.getNewRandomOrder(),
            this.getNewRandomOrder()
        ];

        this.setTableState(tableItems);

        this.setState({
            quests: quests,
            presents: presents,
            orders: orders,
            money: 800,
            energy: 100
        });
    }

    setTableState = (items: TableItem[]) => {
        const itemIndexes = new Map<number, number>();
        items.forEach((item, i) => {
            itemIndexes.set(item.location, i);
        });

        this.setState({
            table: {
                itemIndexes: itemIndexes,
                items: items,
                maxCount: this.state.table.maxCount
            }
        });
    }

    onItemActivation = (i: number) => (e: React.MouseEvent<HTMLDivElement>) => {
        const index = this.state.table.itemIndexes.get(i);
        if (index === undefined) {
            return;
        }

        const props = getItemProps(this.state.table.items[index]);
        if (!props.hasAbility || !props.ability) {
            return;
        }
        
        if (props.ability.needsEnergy && this.state.energy - props.ability.energyCost < 0) {
            return; // no energy
        }

        if (props.ability.canProduce) {
            let predict = Math.floor(Math.random() * 100) + 1;
            let i = 0;
            while (predict > 0) {
                predict -= props.ability.produce[i++].probability;
            }

            const predictedItem = props.ability.produce[i - 1];

            if (this.state.table.items.length >= this.state.table.maxCount) {
                return; // no space
            }

            let location = -1;
            while (true) {
                location = Math.floor(Math.random() * this.state.table.maxCount);
                if (!this.state.table.itemIndexes.has(location)) {
                    break;
                }
            }

            let items = this.state.table.items;
            items.push({
                type: predictedItem.type,
                level: predictedItem.level,
                location: location
            });

            this.setTableState(items);
            if (props.ability.needsEnergy) {
                this.setState({energy: this.state.energy - props.ability.energyCost});
            }
        }

        // TODO: set opacity to item
        // e.currentTarget.classList.add()
    }
    
    onItemDragStart = (i: number) => (e: React.DragEvent<HTMLDivElement>) => {
        const index = this.state.table.itemIndexes.get(i);
        if (index === undefined) {
            return;
        }

        this.setState({dragIndex: index});
    }
    
    onItemDragEnd = (i: number) => (e: React.DragEvent<HTMLDivElement>) => {        
        const index = this.state.table.itemIndexes.get(i);
        let items = this.state.table.items;

        if (!items[this.state.dragIndex] || this.state.dragIndex === index) {
            return;
        }

        if (index === undefined) {
            items[this.state.dragIndex].location = i;
        } else if (isItemsEqual(items[index], items[this.state.dragIndex]) && getMaxLvl(items[index].type) > items[index].level) { 
            // TODO: also check max lvl
            items[index].level = items[index].level + 1;
            items = items.filter((_, i) => i !== this.state.dragIndex);
        } else {
            items[index].location = items[this.state.dragIndex].location;
            items[this.state.dragIndex].location = i;
        }

        this.setTableState(items);
        this.setState({dragIndex: -1});
    }
    
    onItemDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }

    onDragCancel = () => {
        this.setState({dragIndex: -1});
    }

    deliveryBtnClick = (index: number) => () => {
        let indexes = new Array<number>;
        const order = this.state.orders[index]
        order.items.forEach(orderItem => {
            indexes.push(this.state.table.items.findIndex(tableItem => isItemsEqual(tableItem, orderItem)));
        });

        const items = this.state.table.items.filter((_, i) => !indexes.includes(i));
        this.setTableState(items);

        const money = this.state.money + order.price;

        this.setState({
            orders: [...this.state.orders.filter((_, i) => i !== index), this.getNewRandomOrder()],
            money: money,
            canSelectPresent: money >= 700 // todo: check lovest present price 
        });
    }

    getNewRandomOrder = (): Order => {
        const types = getOrderItemTypes();        
        const itemsCount = Math.floor(Math.random() * 2) + 1;

        let items = [] as Item[];
        for (let i = 0; i < itemsCount; i++) {
            const itemType = types[Math.floor(Math.random() * types.length)];

            let level = 0;
            do {
                level = Math.round(Math.random() * (getMaxLvl(itemType) - 1)) + 1;
                console.log(level);
                
            }
            while(!items.every(item => level !== item.level))

            items.push({
                type: itemType,
                level: level
            });
        }

        const itemsSum = items.reduce((sum, item) => sum + getItemProps(item).priceInOrder, 0)

        const newOrder = {
            items: items,
            price: itemsSum + Math.floor(Math.random() * itemsSum * 0.1),
        } as Order;

        return newOrder;
    }

    shouldDisplayDeliveryBtn = (index: number): boolean => {
        const orderItems = this.state.orders[index].items;
        return orderItems.every(orderItem => this.state.table.items.findIndex(tableItem => isItemsEqual(tableItem, orderItem)) >= 0);
    }

    cancelOrder = (index: number) => () => {
        this.setState({
            orders: [...this.state.orders.filter((_, i) => i !== index), this.getNewRandomOrder()]
        });
    }

    onQuestOpen = (id: number) => () => {
        this.setState({
            activeQuest: this.state.quests.find(p => p.id === id),
            isQuestActive: true
        });
    }

    onAnswerSelect = (id: number, answer: string, correct: string, energy: number) => () => {
        var isCorrect = answer === correct;

        this.setState({
            quests: this.state.quests.filter(p => p.id !== id)
        });

        if (isCorrect) {
            this.setState({
                energy: this.state.energy + energy
            });
        }
        
        this.setState({
            isQuestActive: false
        });
    }

    selectPresent = () => {
        this.setState({
            isPresentActive: true
        })
    }

    onPresentSelect = (src: string) => () => {
        this.setState({
            isPresentOpened: true,
            presentOpenedSrc: src,
        })
    }

    closePresent = () => {
        const money = this.state.money - 700;
        this.setState({
            isPresentActive: false,
            isPresentOpened: false,
            money: money,
            presents: this.state.presents.filter(p => p.pictureUrl !== this.state.presentOpenedSrc),
            canSelectPresent: money >= 700
        });
    }

    render(): React.ReactNode {
        const tableItems = [];
        for (var i = 0; i < this.state.table.maxCount; i++) {
            tableItems[i] = i;
        }

        // console.log(this.state.table.items);
        // console.log(this.state.table.itemIndexes);

        return <>
            <div className={style.container}>
                {
                    this.state.isQuestActive && this.state.activeQuest !== null && 
                        <div className={style.popup}>
                            {
                                <>
                                    <p>{this.state.activeQuest.text}</p>
                                    {
                                        this.state.activeQuest.pictureUrl !== null &&
                                            <img className={style.questImg} alt='icon' src={this.state.activeQuest.pictureUrl} />
                                    }
                                    <div className={style.answers}>
                                        {
                                            this.state.activeQuest.answers.map(answer => 
                                                <p className={style.answer} onClick={this.onAnswerSelect(
                                                    this.state.activeQuest?.id ?? 0, 
                                                    answer, 
                                                    this.state.activeQuest?.correctAnswer ?? "",
                                                    this.state.activeQuest?.energy ?? 0
                                                    )}>{answer}</p>
                                            )
                                        }
                                    </div>
                                </>
                            }
                        </div>
                }
                {
                    !this.state.isQuestActive && this.state.quests.length > 0 &&
                        <div className={style.quests}>
                            {
                                this.state.quests.map(quest => 
                                    <div key={quest.id} className={style.quest} onClick={this.onQuestOpen(quest.id)}>
                                        <p>{quest.text}</p>
                                        <p className={style.questCosts}>+{quest.energy}</p>
                                    </div>
                                )
                            }
                        </div>
                }
                {
                    this.state.canSelectPresent && 
                        <button className={style.selectPresent} onClick={this.selectPresent}>Вибрати подарунок</button>
                }
                {
                    this.state.isPresentActive && this.state.presents.length > 0  &&
                        <div className={style.popup}>
                            {
                                this.state.isPresentOpened &&
                                    <>
                                        <img src={this.state.presentOpenedSrc} alt='present' />
                                        <button className={style.closePresentBtn} onClick={this.closePresent}>X</button>
                                    </>
                            }
                            {
                                !this.state.isPresentOpened &&
                                    <div className={style.presents}>
                                        {
                                            this.state.presents.map(present =>
                                                <div className={style.present} onClick={this.onPresentSelect(present.pictureUrl)}>
                                                    <img src={pr} alt="present" />
                                                </div>
                                            )
                                        }
                                    </div>
                            }
                        </div>
                }
                <div className={style.scoreContainer}>
                    <div className={style.scoreItem}>
                        Енергія: {this.state.energy}
                    </div>
                    <div className={style.scoreItem}>
                        Гроші: {this.state.money}$
                    </div>
                </div>
                <div className={style.ordersContainer}>
                    {
                        this.state.orders.map((order, i) => 
                            <div key={i} className={style.order}>
                                <div className={style.cancelDeliveryBtn} onClick={this.cancelOrder(i)}>x</div>
                                <div className={style.orderPrice}>{order.price}$</div>
                                {
                                    order.items.map((item, i) => 
                                        <div key={i} className={style.orderItem}>
                                            <img alt='icon' src={getItemProps(item).displayIcon} />
                                        </div>
                                    )
                                }
                                {
                                    this.shouldDisplayDeliveryBtn(i) && 
                                        <div className={style.orderDeliveryBtn} onClick={this.deliveryBtnClick(i)}>Delivery</div>
                                }
                            </div>  
                        )
                    }
                </div>
                <div className={style.boardContainer}>
                    {
                        tableItems.map((_, i) =>
                            <div 
                                key={i} 
                                className={style.boardItem} 
                                onClick={this.onItemActivation(i)}
                                onDragStart={this.onItemDragStart(i)}
                                onDrop={this.onItemDragEnd(i)}
                                onDragOver={this.onItemDragOver}
                                onDragEndCapture={this.onDragCancel}
                            >
                                {
                                    this.state.table.itemIndexes.get(i) !== undefined &&
                                        <img alt='icon' src={getItemProps(this.state.table.items[this.state.table.itemIndexes.get(i) ?? -1]).displayIcon} />
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    }
}

export default Main;