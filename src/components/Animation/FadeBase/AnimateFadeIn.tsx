import React, { ComponentProps, memo, useEffect, useState, FC, useRef } from "react";
import { CSSTransition } from 'react-transition-group';


type Props = {
    children: JSX.Element;
    timeout: number;
    itemKey: number;
}

export const AnimateFadeIn = memo<Props>(({ children, timeout, itemKey }) => {
    const [visible, setVisible] = useState(true);
    const isMount = useRef(false);

    useEffect(() => {
        if (isMount.current) {
            setVisible(false)
            setTimeout(() => { setVisible(true) }, timeout)
        }

        isMount.current = true

    }, [itemKey])


    return (
        <CSSTransition 
            in={visible} 
            timeout={timeout} 
            classNames="alert" 
        >
            {children}
        </CSSTransition>
    )
})