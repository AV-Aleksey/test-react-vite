import React, { FC } from 'react';
import { Box, Props as BoxPros } from './Box';
import { createCn } from 'bem-react-classname';
import './styles.less'

export type Props = {} & BoxPros;

const prefixCls = 'record-grid';
const cn = createCn(prefixCls);


export const Grid: FC<Props> = ({children, className, ...rest}) => 
    <div className={`${cn('grid')}${className ? ' ' + className : ''}`}>
        <Box {...rest}>
            { children }
        </Box>
    </div>
    

