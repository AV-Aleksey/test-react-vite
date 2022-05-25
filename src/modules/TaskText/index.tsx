import React, { FC } from 'react';
import { createCn } from "bem-react-classname/create-cn";
import { Modules } from "../../constants/roles";
import './styles.less'

type Props = {
    moduleId: number;
    text: string;
    size?: 'middle' | 'large';
    bold?: boolean;
    className?: string;
}

const prefixCls = 'record-text-task';
const cn = createCn(prefixCls);

export const TaskText: FC<Props> = ({
    moduleId,
    text ,
    size = 'middle',
    bold = false,
    className,
}) => {
    const classNames = [];
    const otherModificators = {
        size,
        weight: bold ? 'bold' : 'normal'
    }

    switch (moduleId) {
        case Modules.education:
            classNames.push(cn({ module: 'education', ...otherModificators }));
            break
        case Modules.career:
            classNames.push(cn({ module: 'career', ...otherModificators }));
            break
        case Modules.adaptation:
            classNames.push(cn({ module: 'adaptation', ...otherModificators }));
            break
        default:
            classNames.push(cn({ module: 'efficiency', ...otherModificators }));
    }

    if (className) {
        classNames.push(className);
    }

     return <p className={classNames.join(' ')}>{text}</p>
}
