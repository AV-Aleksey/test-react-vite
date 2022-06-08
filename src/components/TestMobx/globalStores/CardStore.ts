import { action, makeObservable, observable, autorun, IReactionDisposer } from "mobx"

export class CardStore {
    public count = 0;
    public cards = [{ name: 'kirill', age: 10, id: 1 }];
    public cancelAutorun: IReactionDisposer | null = null;

    constructor() {
        makeObservable(this, {
            count: observable,
            cards: observable,
            setCount: action.bound
        });

        this.cancelAutorun = autorun(() => {
            console.log(this.count);
        });
    }

    

    public changeCard(idx: number, newName: string): void {
        this.cards[idx].name = newName;
    }

    public setCount(number: number): void {
        this.count = number;
    }
}