import cn from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import css from './styles.module.css';

export const AnimatedItem = ({ text }: { text: string }) => {
    const [fadeIn, setFadeIn] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    return (
        <div className={cn({
            [css.cube]: true, 
            [css.fadeIn]: fadeIn,
            [css.fadeOut]: fadeOut,
        })}>{text}</div>
    )
}
