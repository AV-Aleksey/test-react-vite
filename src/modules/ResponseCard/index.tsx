import React, {FC, DetailedHTMLProps, HTMLAttributes} from 'react';
import { createCn } from "bem-react-classname/create-cn";
import './styles.less';

const prefixCls = 'record-response-card';
const cn = createCn(prefixCls);

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    bordered?: boolean;
}

export const ResponseCard: FC<IProps> = ({
    children,
    className,
    bordered,
    ...other
}) => {
    const classNames = [cn(bordered ? { bordered } : {})];

    if (className) {
        classNames.push(className);
    }

     return (
        <div className={classNames.join(' ')} {...other}>
            {children}
        </div>
     )
}
