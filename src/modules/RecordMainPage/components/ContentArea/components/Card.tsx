import React, { FC } from 'react'
import './styles.less'
import { RoleTag } from '../../../../RoleTag';
import { createCn } from "bem-react-classname/create-cn";
import { TaskText } from "../../../../TaskText";
import { ResponseCard } from "../../../../ResponseCard";
import moment from 'moment';

const prefixCls = 'record-card-task';
const cn = createCn(prefixCls);

type Props = {
    roleId: number;
    moduleId: number;
    textTask: string;
    countTask: number;
    startDate: Date | string;
    endDate?: Date | string;
    onClick?: React.MouseEventHandler<HTMLElement>;
    bordered?: boolean;
}

export const Card: FC<Props> = ({
    roleId,
    moduleId,
    textTask,
    countTask ,
    startDate,
    endDate,
    onClick,
    bordered = false,
}) => {
    const formattedStartDate = moment(startDate).format('DD.MM.YYYY');
    const formattedEndDate = endDate ? moment(endDate).format('DD.MM.YYYY') : '(Бессрочно)';

    return (
        <ResponseCard bordered={bordered} onClick={onClick} className={cn(onClick ? { active: 'item' } : {})}>
            <div className={cn('wrap-tag-and-text')}>
                <RoleTag roleId={roleId} className={cn('tag')} />
                <TaskText text={textTask} moduleId={moduleId} bold className={cn('text')} />
            </div>
            <div className={cn('wrap-count-and-date')}>
                <span className={cn('counter')}>{countTask}</span>
                <span className={cn('date')}>{formattedStartDate} - {formattedEndDate}</span>
            </div>
        </ResponseCard>
    )
}
