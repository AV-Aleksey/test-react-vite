import { observable, reaction } from "mobx"
import { observer } from "mobx-react"
import React, { useContext } from "react"
import { Card } from "./components/Card"
import { StoreContext } from "./context"
import { useBootstrap } from "./hooks/useBootstrap"


export const TestMobx = () => {
    const { stores } = useBootstrap();
    
    return (
        <StoreContext.Provider value={stores}>
            <div>
                <Card />
            </div>
        </StoreContext.Provider>

    )
}