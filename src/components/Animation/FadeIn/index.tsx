import React, { useRef, useState } from "react";
import { Transition, CSSTransition } from 'react-transition-group';
import { useTransition, animated } from 'react-spring';
import cn from 'classnames';
import css from './styles.module.css';
import { AnimatedItem } from "./components/AnimatedItem";


export const FadeIn = () => {
    const [data, setData] = useState<{text: string; id: number}[]>([
        {text: 'hello', id: 1},
        {text: 'world', id: 2},
        {text: 'programmer', id: 3}
    ]);
    const [currentIdx, setCurrentIdx] = useState(0);
    const LIMIT = data.length - 1;

    const handleToNext = () => {
        const targetIdx = currentIdx + 1;

        if (targetIdx > LIMIT) {
            setCurrentIdx(LIMIT);
            return;
        }

        setCurrentIdx(targetIdx);
    }

    const handleToPrev = () => {
        const targetIdx = currentIdx - 1;

        if (targetIdx < 0) {
            setCurrentIdx(0);
            return;
        }

        setCurrentIdx(currentIdx - 1)
    }

    return (
        <div className={css.wrapCube}>
            
            <AnimatedItem text={data[currentIdx].text} />
            <div className={css.control}>
                <button className={css.controlBtn} onClick={handleToPrev}>prev</button>
                <button className={css.controlBtn} onClick={handleToNext}>next</button>
            </div>
        </div>
    )
}

