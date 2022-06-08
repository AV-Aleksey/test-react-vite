import { observer } from "mobx-react";
import React from "react"
import { useStores } from "../hooks/useBootstrap";

export const Card = observer(() => {
    const { CardStore } = useStores();
    const { setCount, count } = CardStore;
    
    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(CardStore.count + 1)}>click</button>
            <button onClick={() => CardStore.cancelAutorun?.()} >cancel autorun</button>
        </div>
    )
})