import React, { memo, useEffect, useState } from "react";
import css from './styles.module.css';
import cn from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { Item } from "./Item";
import { AnimateFadeIn } from "./AnimateFadeIn";

export const FadeBase = memo(() => {
    const [data, setData] = useState([{text: 'text1', id: 1}, {text: 'text2', id: 2}, {text: 'text3', id: 3}])
    const [idx, setIdx] = useState(0);

    
    return (
        <div className={css.wrap}>
            <button onClick={() => setIdx(data[idx + 1] ? idx + 1 : 0)}>next</button>

            <AnimateFadeIn itemKey={data[idx].id} timeout={300}>
                <div className={cn({[css.cube]: true})}>{data[idx].text}</div>
            </AnimateFadeIn>
        </div>
    )
})

