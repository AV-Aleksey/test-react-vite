import React, { FC } from 'react';

import { WRAP, DIRECTION, ALIGNMENT, JUSTIFY } from './Box.consts';
import './styles.less';
import { createCn } from 'bem-react-classname';

const prefixCls = 'record-grid';
const cn = createCn(prefixCls);

export type Props = {
    dir?: 'row' | 'col';
    justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
    align?: 'stretch' | 'start' | 'end' | 'center' | 'base';
    wrap?: 'no' | 'yes';
    spacing?: 'xxl' | 'xl' | 'lg' | 'md' | 'strict';
    className?: string;
}

export const Box: FC<Props> = ({
    dir = 'row',
    wrap = 'yes',
    align = 'stretch',
    justify = 'start',
    spacing = 'strict',
    children, 
}) => {
    const classNames = `${cn('box', {
        wrap: WRAP[wrap],
        dir: DIRECTION[dir],
        align: ALIGNMENT[align],
        justify: JUSTIFY[justify],
        spacing: spacing === 'strict' ? 'grid-strict' : `spacing-${spacing}`,
    })}`

    return (
        <div className={classNames}>
            {children}
        </div>
    )
}
