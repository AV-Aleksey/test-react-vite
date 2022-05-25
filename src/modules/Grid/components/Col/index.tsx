import React, { FC } from 'react';

import './styles.less';
import { createCn } from 'bem-react-classname/create-cn';

const prefixCls = 'record-grid';
const cn = createCn(prefixCls);

export type Props = {
    size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    className?: string;
}


export const Col: FC<Props> = ({size = 12, children, className}) => 
    <div className={`${cn('col', { size })}${className ? ' ' + className : ''}`}>
        {children}
    </div>
    

