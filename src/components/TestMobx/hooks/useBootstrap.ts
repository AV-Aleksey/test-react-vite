import { useContext } from "react"
import { StoreContext } from "../context"
import { CardStore } from "../globalStores/CardStore"
import { Stores } from "../types"

export const useBootstrap = () => {
    const stores = {
        CardStore: new CardStore()
    }

    return { stores }
}

export const useStores = (): Stores => {
    const stores = useContext(StoreContext);

    if (!stores) {
        throw new Error('useStore нужно использовать в контексте Provider')
    }

    return stores;
}