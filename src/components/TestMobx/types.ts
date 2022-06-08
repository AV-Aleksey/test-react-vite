import { CardStore } from "./globalStores/CardStore"

export type Stores = {
    CardStore: CardStore;
}

export type GlobalData = {
    stores: Stores
}