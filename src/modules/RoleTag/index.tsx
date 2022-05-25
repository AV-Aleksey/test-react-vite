import React, { FC } from 'react';
import { Roles } from '../../constants/roles';
import { createCn } from 'bem-react-classname/create-cn';
import './index.less';

const { manager, finService, dkp, dkpCareer, dkpTraining, sup, supCareer, supTraining, supUk, supUkCareer, supUkTraining } = Roles;

const prefixCls = 'record-role-tag';
const cn = createCn(prefixCls);

type Props = {
    roleId?: number;
    className?: string;
}

export const RoleTag: FC<Props> = ({className, roleId: id}) => {
    const roleId = id ?? 1;
    const classNames = [];
    let text = 'Сотрудник';

    switch(true) {
        case [manager].includes(roleId):
            classNames.push(cn({role: 'manager'}));
            text = 'Руководитель';
            break;
        case [finService].includes(roleId):
            classNames.push(cn({role: 'fes'}));
            text = 'ФЕС';
            break;
        case [dkp, dkpCareer, dkpTraining].includes(roleId):
            classNames.push(cn({role: 'dkp'}));
            text = 'ДКП';
            break;
        case [sup, supCareer, supTraining, supUk, supUkCareer, supUkTraining].includes(roleId):
            classNames.push(cn({role: 'sup'}));
            text = 'СУП';
            break;
        default:
            classNames.push(cn({role: 'employee'}));
            text = 'Сотрудник';
            break;
    }

    if (className) {
        classNames.push(className)
    }

    return (
        <span className={classNames.join(' ')}>
            { text }
        </span>
    );
};

