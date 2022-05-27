import React, { memo, useEffect, useState } from "react";
import css from './styles.module.css';
import cn from 'classnames';
import { CSSTransition } from 'react-transition-group';


export const Item = memo(({ text }: { text: string }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setVisible(false)
        setTimeout(() => { setVisible(true) }, 300)
    }, [text])


    return (
        <CSSTransition 
            in={visible} 
            timeout={300} 
            classNames="alert" 
            unmountOnExit
        >
            <div className={cn({[css.cube]: true})}>{text}</div>
        </CSSTransition>
    )
})